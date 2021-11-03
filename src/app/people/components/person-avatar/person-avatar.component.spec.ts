import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonAvatarComponent } from './person-avatar.component';

describe('PersonAvatarComponent', () => {
  let fixture: ComponentFixture<PersonAvatarComponent>;
  let component: PersonAvatarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonAvatarComponent],
    })
      .overrideComponent(PersonAvatarComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAvatarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an image with the given url, sizes and an empty alternative text', () => {
    component.width = 64;
    component.height = 64;
    component.url = 'http://placehold.it/64x64';

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const avatar = element.querySelector('img');

    expect(avatar).not.toBeNull();

    if (avatar) {
      expect(avatar.alt).toBe('');
      expect(avatar.width).toBe(64);
      expect(avatar.height).toBe(64);
      expect(avatar.src).toBe('http://placehold.it/64x64');
    }
  });
});
