import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonTagComponent } from './person-tag.component';

describe('PersonTagComponent', () => {
  let fixture: ComponentFixture<PersonTagComponent>;
  let component: PersonTagComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonTagComponent],
    })
      .overrideComponent(PersonTagComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTagComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a tag name', () => {
    component.name = 'Example tag';

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const span = element.querySelector('span');

    expect(span).not.toBeNull();

    if (span) {
      expect(element.textContent).toBe('Example tag');
    }
  });
});
