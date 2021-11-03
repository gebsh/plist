import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-person-tag',
  templateUrl: './person-tag.component.html',
  styleUrls: ['./person-tag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonTagComponent {
  @Input() public name: string = 'wtf?';
}
