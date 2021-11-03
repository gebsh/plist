import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartialPerson, Person } from 'app/people/models/person.model';
import { PeopleService } from 'app/people/services/people.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonEditComponent implements OnInit {
  public person$?: Observable<Person>;
  public error?: 'loading' | 'saving';
  public submitting: boolean = false;

  constructor(
    private readonly _cd: ChangeDetectorRef,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _peopleService: PeopleService,
  ) {}

  public ngOnInit(): void {
    this.person$ = this._route.paramMap.pipe(
      tap(() => {
        this.error = undefined;

        this._cd.markForCheck();
      }),
      switchMap((params) =>
        this._peopleService.getPerson(params.get('id')!).pipe(
          catchError((error) => {
            this.error = 'loading';

            this._cd.markForCheck();
            console.error('An error occurred while loading the user.\n', error);

            return EMPTY;
          }),
        ),
      ),
    );
  }

  public savePerson(id: string, person: PartialPerson): void {
    this.error = undefined;
    this.submitting = true;

    this._cd.markForCheck();
    this._peopleService.editPerson(id, person).subscribe({
      error: (error) => {
        this.error = 'saving';
        this.submitting = false;

        this._cd.markForCheck();
        console.error('An error occurred while saving the user.\n', error);
      },
      complete: () => {
        this.submitting = false;

        this._cd.markForCheck();
        this._router.navigateByUrl('/people');
      },
    });
  }
}
