import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DEFAULT_AVATAR } from 'app/people/models/person.model';

@Component({
  selector: 'app-person-avatar',
  templateUrl: './person-avatar.component.html',
  styleUrls: ['./person-avatar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonAvatarComponent {
  @Input() public width: number = 32;
  @Input() public height: number = 32;
  @Input() public url: string = DEFAULT_AVATAR;
}
