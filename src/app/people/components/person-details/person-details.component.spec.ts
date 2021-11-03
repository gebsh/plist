import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from 'app/people/services/people.service';
import { SharedModule } from 'app/shared/shared.module';
import { PeopleServiceStub } from 'src/testing/people.service.stub';
import { PersonAvatarComponent } from '../person-avatar/person-avatar.component';
import { PersonPageHeaderComponent } from '../person-page-header/person-page-header.component';
import { PersonTagComponent } from '../person-tag/person-tag.component';
import { PersonDetailsComponent } from './person-details.component';

describe('PersonDetailsComponent', () => {
  let fixture: ComponentFixture<PersonDetailsComponent>;
  let component: PersonDetailsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PersonDetailsComponent,
        PersonPageHeaderComponent,
        PersonAvatarComponent,
        PersonTagComponent,
      ],
      imports: [RouterTestingModule.withRoutes([]), SharedModule],
      providers: [
        { provide: PeopleService, useValue: new PeopleServiceStub() },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
