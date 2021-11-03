import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from 'app/people/services/people.service';
import { SharedModule } from 'app/shared/shared.module';
import { PeopleServiceStub } from 'src/testing/people.service.stub';
import { PersonAvatarComponent } from '../person-avatar/person-avatar.component';
import { PersonFormComponent } from '../person-form/person-form.component';
import { PersonPageHeaderComponent } from '../person-page-header/person-page-header.component';
import { PersonEditComponent } from './person-edit.component';

describe('PersonEditComponent', () => {
  let fixture: ComponentFixture<PersonEditComponent>;
  let component: PersonEditComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PersonEditComponent,
        PersonPageHeaderComponent,
        PersonFormComponent,
        PersonAvatarComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        SharedModule,
      ],
      providers: [
        { provide: PeopleService, useValue: new PeopleServiceStub() },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
