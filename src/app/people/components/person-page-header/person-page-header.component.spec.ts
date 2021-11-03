import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonPageHeaderComponent } from './person-page-header.component';

describe('PersonPageHeaderComponent', () => {
  let component: PersonPageHeaderComponent;
  let fixture: ComponentFixture<PersonPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonPageHeaderComponent],
    })
      .overrideComponent(PersonPageHeaderComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPageHeaderComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a heading with the given text', () => {
    component.header = 'Test header';

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const heading = element.querySelector('h1');

    expect(heading).not.toBeNull();

    if (heading) {
      expect(heading.textContent).toBe('Test header');
    }
  });
});
