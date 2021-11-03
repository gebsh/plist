import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain status code', () => {
    const element: HTMLElement = fixture.nativeElement;
    const statusCode = element.querySelector('.status-code');

    expect(statusCode).not.toBeNull();

    if (statusCode) {
      expect(statusCode.textContent).toBe('404');
    }
  });

  it('should contain status text', () => {
    const element: HTMLElement = fixture.nativeElement;
    const statusText = element.querySelector('.status-text');

    expect(statusText).not.toBeNull();

    if (statusText) {
      expect(statusText.textContent).toBe('Page not found');
    }
  });
});
