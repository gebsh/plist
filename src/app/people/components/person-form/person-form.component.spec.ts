import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PartialPerson } from 'app/people/models/person.model';
import { PersonAvatarComponent } from '../person-avatar/person-avatar.component';
import { PersonFormComponent } from './person-form.component';

describe('PersonFormComponent', () => {
  let fixture: ComponentFixture<PersonFormComponent>;
  let component: PersonFormComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonFormComponent, PersonAvatarComponent],
      imports: [ReactiveFormsModule],
    })
      .overrideComponent(PersonFormComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the given id to the form', () => {
    component.formId = 'form-id';

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const form = element.querySelector('form');

    expect(form).not.toBeNull();

    if (form) {
      expect(form.id).toBe('form-id');
    }
  });

  it('should fill the form with person data', () => {
    const person: PartialPerson = {
      name: 'Ailee Gladeche',
      company: 'Flatley and Sons',
      avatarUrl: 'http://placehold.it/32x32',
      email: 'agladeche0@dmoz.org',
      phone: '(378) 3377843',
      address: '530 Orin Street',
      about:
        'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
      tags: ['duis', 'at'],
    };
    component.person = person;

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const fields: ReadonlyArray<{
      readonly domId: string;
      readonly modelField: keyof PartialPerson;
    }> = [
      { domId: 'name', modelField: 'name' },
      { domId: 'company', modelField: 'company' },
      { domId: 'avatar', modelField: 'avatarUrl' },
      { domId: 'email', modelField: 'email' },
      { domId: 'phone', modelField: 'phone' },
      { domId: 'address', modelField: 'address' },
      { domId: 'about', modelField: 'about' },
    ];

    fields.forEach(({ domId, modelField }) => {
      const input: HTMLInputElement | null = element.querySelector(
        `#person-${domId}`,
      );

      expect(input).not.toBeNull();

      if (input) {
        expect(input.value).toBe(person[modelField] as string);
      }
    });
    person.tags.forEach((tag, i) => {
      const input: HTMLInputElement | null = element.querySelector(
        `#person-tag-${i + 1}`,
      );

      expect(input).not.toBeNull();

      if (input) {
        expect(input.value).toBe(tag);
      }
    });
  });
});
