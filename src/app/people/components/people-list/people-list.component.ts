import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  EMPTY,
  Observable,
  Subject,
} from 'rxjs';
import {
  catchError,
  debounceTime,
  filter,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Person } from '../../models/person.model';
import {
  PaginatedPeople,
  PeopleService,
  SortableColumns,
  SortOptions,
  SortOrder,
} from '../../services/people.service';

const ROWS_LIMIT: number = 20;

function parsePage(queryParams: ParamMap): number | null {
  let page: string | number | null = queryParams.get('page');

  if (typeof page === 'string') {
    page = Number.parseInt(page, 10);

    return Number.isNaN(page) ? null : page;
  } else {
    return null;
  }
}

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListComponent implements OnInit {
  public data$?: Observable<PaginatedPeople>;
  public error: boolean = false;
  public readonly filterControl = new FormControl('');
  private readonly _sortSubject = new BehaviorSubject<SortOptions | undefined>(
    undefined,
  );
  private readonly _refreshSubject = new Subject<undefined>();

  public get nameSortOrder(): SortOrder | undefined {
    if (this._sortSubject.value?.column === 'name') {
      return this._sortSubject.value.order;
    } else {
      return undefined;
    }
  }

  public get companySortOrder(): SortOrder | undefined {
    if (this._sortSubject.value?.column === 'company') {
      return this._sortSubject.value.order;
    } else {
      return undefined;
    }
  }

  constructor(
    private readonly _cd: ChangeDetectorRef,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _peopleService: PeopleService,
  ) {}

  public ngOnInit(): void {
    // This is a very naive implementation of pagination, filtering and sorting
    // but for this app it'll do.
    this.data$ = combineLatest([
      this._route.queryParamMap,
      this.filterControl.valueChanges.pipe(
        startWith(''),
        debounceTime(200),
        filter((value): value is string => typeof value === 'string'),
      ),
      this._sortSubject.asObservable().pipe(debounceTime(200)),
      this._refreshSubject.asObservable().pipe(startWith(undefined)),
    ]).pipe(
      tap(() => {
        this.error = false;

        this._cd.markForCheck();
      }),
      switchMap(([queryParams, filterQuery, sortOptions]) => {
        const page = parsePage(queryParams) ?? 1;
        const offset = ROWS_LIMIT * (page - 1);

        return this._peopleService
          .getPeople({
            limit: ROWS_LIMIT,
            offset,
            filterQuery,
            sortOptions,
          })
          .pipe(
            catchError((error) => {
              this.error = true;

              this._cd.markForCheck();
              console.error('An error occurred while loading users.\n', error);

              return EMPTY;
            }),
          );
      }),
    );
  }

  public sort(column: SortableColumns): void {
    const currentSortOptions = this._sortSubject.value;

    if (currentSortOptions?.column === column) {
      if (currentSortOptions.order === 'asc') {
        this._sortSubject.next({ column, order: 'desc' });
      } else {
        this._sortSubject.next(undefined);
      }
    } else {
      this._sortSubject.next({ column, order: 'asc' });
    }
  }

  public createPerson(): void {
    this._router.navigate(['./create'], { relativeTo: this._route });
  }

  public openPersonDetails(id: string): void {
    this._router.navigate(['./details', id], { relativeTo: this._route });
  }

  public editPerson(event: MouseEvent, id: string): void {
    event.stopPropagation();
    this._router.navigate(['./edit', id], { relativeTo: this._route });
  }

  public deletePerson(
    event: MouseEvent,
    id: string,
    currentPage: number,
    lastPage: number,
    countPeople: number,
  ): void {
    event.stopPropagation();
    this._peopleService.deletePerson(id).subscribe({
      error: (error) => {
        // TODO: User should be notified about an error.
        console.error(
          `An error occurred while deleting the user with id ${id}.\n`,
          error,
        );
      },
      complete: () => {
        // If we've just deleted the last row of the last page, then we have to
        // navigate to the previous page (of course provided that it exists).
        // Otherwise, we would be left with a table saying that there's no data.
        if (countPeople === 1 && lastPage > 1 && currentPage === lastPage) {
          this._router.navigate(['./'], {
            relativeTo: this._route,
            queryParams: { page: currentPage - 1 },
          });
        } else {
          this._refreshSubject.next();
        }
      },
    });
  }

  public personTrackBy(index: number, person: Person): string {
    return person.id;
  }
}
