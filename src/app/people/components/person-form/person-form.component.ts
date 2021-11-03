import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  DEFAULT_AVATAR,
  PartialPerson,
  Person,
} from 'app/people/models/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonFormComponent {
  @Input() public formId?: string;
  @Input() public set person(person: PartialPerson) {
    this.personForm.setValue({
      name: person.name,
      company: person.company,
      email: person.email,
      phone: person.phone,
      address: person.address,
      avatarUrl: person.avatarUrl,
      about: person.about,
      tags: [],
    });
    person.tags.forEach((tag) => {
      this.addTag(tag);
    });
  }
  @Output() public readonly submitPerson = new EventEmitter<PartialPerson>();
  public readonly personForm = this._formBuilder.group({
    name: ['', [Validators.required]],
    company: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    address: ['', [Validators.required]],
    avatarUrl: [DEFAULT_AVATAR],
    about: [''],
    tags: this._formBuilder.array([]),
  });

  public get name(): FormControl {
    return this.personForm.get('name')! as FormControl;
  }

  public get company(): FormControl {
    return this.personForm.get('company')! as FormControl;
  }

  public get email(): FormControl {
    return this.personForm.get('email')! as FormControl;
  }

  public get address(): FormControl {
    return this.personForm.get('address')! as FormControl;
  }

  public get avatarUrl(): FormControl {
    return this.personForm.get('avatarUrl')! as FormControl;
  }

  public get tags(): FormArray {
    return this.personForm.get('tags')! as FormArray;
  }

  constructor(private readonly _formBuilder: FormBuilder) {}

  public addTag(tag: string = ''): void {
    this.tags.push(this._formBuilder.control(tag, [Validators.required]));
  }

  public removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  public handleSubmit(): void {
    if (this.personForm.valid) {
      this.submitPerson.emit(this.personForm.value);
    } else {
      this.personForm.markAllAsTouched();
    }
  }
}
