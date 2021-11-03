import { ChangeDetectionStrategy, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleListPaginationComponent } from './people-list-pagination.component';

describe('PeopleListPaginationComponent', () => {
  let fixture: ComponentFixture<PeopleListPaginationComponent>;
  let component: PeopleListPaginationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleListPaginationComponent],
      imports: [RouterTestingModule.withRoutes([])],
    })
      .overrideComponent(PeopleListPaginationComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListPaginationComponent);
    component = fixture.componentInstance;
  });

  it('should render a full pagination if the number of pages is not greater than 5', () => {
    component.currentPage = 2;
    component.lastPage = 5;

    // https://github.com/angular/angular/issues/9866
    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 2, true),
      lastPage: new SimpleChange(undefined, 5, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('1');
      expect(links[1].textContent).toBe('2');
      expect(links[2].textContent).toBe('3');
      expect(links[3].textContent).toBe('4');
      expect(links[4].textContent).toBe('5');
    }
  });

  it('should render the "[1], 2, 3, 4, 5" pagination if the current page is 1 and the number of pages is equal to 7', () => {
    component.currentPage = 1;
    component.lastPage = 7;

    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 1, true),
      lastPage: new SimpleChange(undefined, 7, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('1');
      expect(links[0].classList.contains('current')).toBeTrue();
      expect(links[1].textContent).toBe('2');
      expect(links[2].textContent).toBe('3');
      expect(links[3].textContent).toBe('4');
      expect(links[4].textContent).toBe('5');
    }
  });

  it('should render the "1, [2], 3, 4, 5" pagination if the current page is 2 and the number of pages is equal to 7', () => {
    component.currentPage = 2;
    component.lastPage = 7;

    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 2, true),
      lastPage: new SimpleChange(undefined, 7, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('1');
      expect(links[1].textContent).toBe('2');
      expect(links[1].classList.contains('current')).toBeTrue();
      expect(links[2].textContent).toBe('3');
      expect(links[3].textContent).toBe('4');
      expect(links[4].textContent).toBe('5');
    }
  });

  it('should render the "1, 2, [3], 4, 5" pagination if the current page is 3 and the number of pages is equal to 7', () => {
    component.currentPage = 3;
    component.lastPage = 7;

    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 3, true),
      lastPage: new SimpleChange(undefined, 7, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('1');
      expect(links[1].textContent).toBe('2');
      expect(links[2].textContent).toBe('3');
      expect(links[2].classList.contains('current')).toBeTrue();
      expect(links[3].textContent).toBe('4');
      expect(links[4].textContent).toBe('5');
    }
  });

  it('should render the "2, 3, [4], 5, 6" pagination if the current page is 4 and the number of pages is equal to 7', () => {
    component.currentPage = 4;
    component.lastPage = 7;

    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 4, true),
      lastPage: new SimpleChange(undefined, 7, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('2');
      expect(links[1].textContent).toBe('3');
      expect(links[2].textContent).toBe('4');
      expect(links[2].classList.contains('current')).toBeTrue();
      expect(links[3].textContent).toBe('5');
      expect(links[4].textContent).toBe('6');
    }
  });

  it('should render the "3, 4, [5], 6, 7" pagination if the current page is 5 and the number of pages is equal to 7', () => {
    component.currentPage = 5;
    component.lastPage = 7;

    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 5, true),
      lastPage: new SimpleChange(undefined, 7, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('3');
      expect(links[1].textContent).toBe('4');
      expect(links[2].textContent).toBe('5');
      expect(links[2].classList.contains('current')).toBeTrue();
      expect(links[3].textContent).toBe('6');
      expect(links[4].textContent).toBe('7');
    }
  });

  it('should render the "3, 4, 5, [6], 7" pagination if the current page is 6 and the number of pages is equal to 7', () => {
    component.currentPage = 6;
    component.lastPage = 7;

    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 6, true),
      lastPage: new SimpleChange(undefined, 7, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('3');
      expect(links[1].textContent).toBe('4');
      expect(links[2].textContent).toBe('5');
      expect(links[3].textContent).toBe('6');
      expect(links[3].classList.contains('current')).toBeTrue();
      expect(links[4].textContent).toBe('7');
    }
  });

  it('should render the "3, 4, 5, 6, [7]" pagination if the current page is 7 and the number of pages is equal to 7', () => {
    component.currentPage = 7;
    component.lastPage = 7;

    component.ngOnChanges({
      currentPage: new SimpleChange(undefined, 7, true),
      lastPage: new SimpleChange(undefined, 7, true),
    });
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const links = element.querySelectorAll('.pagination-page-segment');

    expect(links.length).toBe(5);

    if (links.length === 5) {
      expect(links[0].textContent).toBe('3');
      expect(links[1].textContent).toBe('4');
      expect(links[2].textContent).toBe('5');
      expect(links[3].textContent).toBe('6');
      expect(links[4].textContent).toBe('7');
      expect(links[4].classList.contains('current')).toBeTrue();
    }
  });
});
