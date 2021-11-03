class RangeFrom {
  private readonly _start: number;

  constructor(start: number) {
    this._start = start;
  }

  public *to(end: number): Generator<number, void, never> {
    for (let i = this._start; i <= end; i++) {
      yield i;
    }
  }

  public *length(length: number): Generator<number, void, never> {
    for (let i = this._start; i < this._start + length; i++) {
      yield i;
    }
  }
}

class RangeTo {
  private readonly _end: number;

  constructor(end: number) {
    this._end = end;
  }

  public *from(start: number): Generator<number, void, never> {
    for (let i = start; i <= this._end; i++) {
      yield i;
    }
  }

  public *length(length: number): Generator<number, void, never> {
    for (let i = this._end - length + 1; i <= this._end; i++) {
      yield i;
    }
  }
}

export function rangeFrom(start: number): RangeFrom {
  return new RangeFrom(start);
}

export function rangeTo(end: number): RangeTo {
  return new RangeTo(end);
}
