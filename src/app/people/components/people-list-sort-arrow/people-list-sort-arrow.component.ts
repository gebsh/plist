import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-people-list-sort-arrow',
  templateUrl: './people-list-sort-arrow.component.html',
  styleUrls: ['./people-list-sort-arrow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListSortArrowComponent {
  @Input() order?: 'asc' | 'desc';
}
