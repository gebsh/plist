import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleListSortArrowComponent } from './people-list-sort-arrow.component';

describe('PeopleListSortArrowComponent', () => {
  let fixture: ComponentFixture<PeopleListSortArrowComponent>;
  let component: PeopleListSortArrowComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleListSortArrowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListSortArrowComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
