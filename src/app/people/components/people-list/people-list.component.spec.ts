import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'app/shared/shared.module';
import { PeopleListPaginationComponent } from '../people-list-pagination/people-list-pagination.component';
import { PeopleListSortArrowComponent } from '../people-list-sort-arrow/people-list-sort-arrow.component';
import { PersonAvatarComponent } from '../person-avatar/person-avatar.component';
import { PeopleListComponent } from './people-list.component';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PeopleListComponent,
        PeopleListSortArrowComponent,
        PeopleListPaginationComponent,
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
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
