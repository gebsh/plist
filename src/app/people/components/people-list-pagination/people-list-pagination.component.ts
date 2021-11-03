import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { rangeFrom, rangeTo } from 'utils/range';

// This must be an odd number.
const VISIBLE_SEGMENTS: number = 5;

@Component({
  selector: 'app-people-list-pagination',
  templateUrl: './people-list-pagination.component.html',
  styleUrls: ['./people-list-pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleListPaginationComponent implements OnChanges {
  @Input() public currentPage: number = 1;
  @Input() public lastPage: number = 1;
  public segments: readonly number[] = [];

  public get previousPage(): number {
    if (this.currentPage > 1) {
      return this.currentPage - 1;
    } else {
      return 1;
    }
  }

  public get nextPage(): number {
    if (this.currentPage < this.lastPage) {
      return this.currentPage + 1;
    } else {
      return this.lastPage;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentPage !== undefined || changes.lastPage !== undefined) {
      this._generatePagination();
    }
  }

  private _generatePagination(): void {
    if (this.lastPage <= VISIBLE_SEGMENTS) {
      this.segments = Array.from(rangeFrom(1).to(this.lastPage));
    } else {
      const segmentsOneHalfLength = Math.floor((VISIBLE_SEGMENTS - 1) / 2);
      const precedingSpace = this.currentPage - 1;
      const succeedingSpace = this.lastPage - this.currentPage;

      // There's no need to check both spaces simultaneously because the
      // preceding `if` already covers the case when the number of segments is
      // less than or equal to `VISIBLE_SEGMENTS`, so we are sure that at least
      // one end of the pagination has enough space for segments.
      if (precedingSpace < segmentsOneHalfLength) {
        this.segments = Array.from(rangeFrom(1).length(VISIBLE_SEGMENTS));
      } else if (succeedingSpace < segmentsOneHalfLength) {
        this.segments = Array.from(
          rangeTo(this.lastPage).length(VISIBLE_SEGMENTS),
        );
      } else {
        this.segments = Array.from(
          rangeFrom(this.currentPage - segmentsOneHalfLength).to(
            this.currentPage + segmentsOneHalfLength,
          ),
        );
      }
    }
  }
}
