import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { PartialPerson } from 'app/people/models/person.model';
import { PeopleService } from 'app/people/services/people.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCreateComponent {
  public error: boolean = false;
  public submitting: boolean = false;

  constructor(
    private readonly _cd: ChangeDetectorRef,
    private readonly _router: Router,
    private readonly _peopleService: PeopleService,
  ) {}

  public createPerson(person: PartialPerson): void {
    this.error = false;
    this.submitting = true;

    this._cd.markForCheck();
    this._peopleService.createPerson(person).subscribe({
      error: (error) => {
        this.error = true;
        this.submitting = false;

        this._cd.markForCheck();
        console.error('An error occurred while creating the user.\n', error);
      },
      complete: () => {
        this.submitting = false;

        this._cd.markForCheck();
        this._router.navigateByUrl('/people');
      },
    });
  }
}
