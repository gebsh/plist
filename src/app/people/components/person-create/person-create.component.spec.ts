import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'app/shared/shared.module';
import { PersonAvatarComponent } from '../person-avatar/person-avatar.component';
import { PersonFormComponent } from '../person-form/person-form.component';
import { PersonPageHeaderComponent } from '../person-page-header/person-page-header.component';
import { PersonCreateComponent } from './person-create.component';

describe('PersonCreateComponent', () => {
  let fixture: ComponentFixture<PersonCreateComponent>;
  let component: PersonCreateComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PersonCreateComponent,
        PersonPageHeaderComponent,
        PersonFormComponent,
        PersonAvatarComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        SharedModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreateComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
