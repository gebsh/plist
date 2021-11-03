import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'app/people/models/person.model';
import { PeopleService } from 'app/people/services/people.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailsComponent implements OnInit {
  public person$?: Observable<Person | 'empty' | undefined>;
  public error: boolean = false;

  constructor(
    private readonly _cd: ChangeDetectorRef,
    private readonly _route: ActivatedRoute,
    private readonly _peopleService: PeopleService,
  ) {}

  public ngOnInit(): void {
    this.person$ = this._route.paramMap.pipe(
      tap(() => {
        this.error = false;

        this._cd.markForCheck();
      }),
      switchMap((params) =>
        this._peopleService.getPerson(params.get('id')!).pipe(
          catchError((error) => {
            this.error = true;

            this._cd.markForCheck();
            console.error('An error occurred while loading the user.\n', error);

            return EMPTY;
          }),
        ),
      ),
      // This is a workaround to the Angular's async pipe that returns null as
      // an initial value (null is also returned from the service as an API
      // would do).
      // Ideally, there should be a separate structural directive to subscribe
      // an observable inside a template but it's kinda complex to create one,
      // so we stick to something simpler.
      // For more information see:
      //   * https://github.com/angular/angular/issues/16982
      //   * https://ngrx.io/guide/component/let
      map((person) => person ?? 'empty'),
    );
  }
}
