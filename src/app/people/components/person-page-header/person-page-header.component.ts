import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-person-page-header',
  templateUrl: './person-page-header.component.html',
  styleUrls: ['./person-page-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonPageHeaderComponent {
  @Input() header: string = '';
}
