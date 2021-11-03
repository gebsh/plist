import { Injectable } from '@angular/core';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import data from 'assets/data.json';
import { clamp } from 'utils/num';
import { DEFAULT_AVATAR, PartialPerson, Person } from '../models/person.model';

export type SortOrder = 'asc' | 'desc';
export type SortableColumns = 'name' | 'company';

export interface SortOptions {
  readonly order: SortOrder;
  readonly column: SortableColumns;
}

export interface PaginationOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly filterQuery?: string;
  readonly sortOptions?: SortOptions;
}

export interface PaginatedPeople {
  readonly people: readonly Person[];
  readonly currentPage: number;
  readonly lastPage: number;
  readonly currentIndex: number;
  readonly lastIndex: number;
  readonly sortOptions?: SortOptions;
}

const DEFAULT_LIMIT: number = 10;
const PEOPLE: Map<string, Person> = new Map(
  data.map((person) => [person.id, person]),
);
const RANDOM: string = Math.floor(Math.random() * 0x100000).toString(16);
let counter: number = Math.floor(Math.random() * 0x1000);

// This tries to naively imitate MongoDB's ObjectId. For this simple app it is
// fine but please, do not use this anywhere else.
function generateId(): [number, string] {
  const timestamp = Date.now();
  const count = counter.toString(16);
  counter = (counter + 1) % 0x1000;

  return [timestamp, `${timestamp.toString(16)}${RANDOM}${count}`];
}

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  public getPerson(id: string): Observable<Person> {
    if (PEOPLE.has(id)) {
      return of(PEOPLE.get(id)!);
    } else {
      return throwError(new Error(`Person with id "${id}" does not exist`));
    }
  }

  public getPeople(options?: PaginationOptions): Observable<PaginatedPeople> {
    const limit = clamp(options?.limit ?? DEFAULT_LIMIT, 1, 100);
    const start = clamp(options?.offset ?? 0, 0, PEOPLE.size);
    const end = start + limit;
    let people = Array.from(PEOPLE.values());

    if (options?.filterQuery) {
      const filter = options.filterQuery.toLocaleLowerCase();

      people = people.filter(
        (person) =>
          person.name.toLocaleLowerCase().includes(filter) ||
          person.company.toLocaleLowerCase().includes(filter),
      );
    }

    if (options?.sortOptions) {
      const { order, column } = options.sortOptions;

      people.sort((first, second) => {
        if (order === 'asc') {
          return first[column].localeCompare(second[column]);
        } else {
          return second[column].localeCompare(first[column]);
        }
      });
    }

    const currentPage = Math.floor(start / limit) + 1;
    const lastPage = Math.ceil(people.length / limit);

    return of({
      people: people.slice(start, end),
      currentPage,
      lastPage,
      currentIndex: start + 1,
      lastIndex: people.length,
      sortOptions: options?.sortOptions,
    });
  }

  public createPerson(newPerson: PartialPerson): Observable<Person> {
    const [timestamp, id] = generateId();
    const person: Person = {
      ...newPerson,
      avatarUrl: newPerson.avatarUrl ?? DEFAULT_AVATAR,
      id,
      createdAt: timestamp,
    };

    PEOPLE.set(id, person);

    return of(person);
  }

  public editPerson(
    id: string,
    updatedPerson: PartialPerson,
  ): Observable<never> {
    if (PEOPLE.has(id)) {
      const { createdAt } = PEOPLE.get(id)!;
      const person: Person = {
        ...updatedPerson,
        avatarUrl: updatedPerson.avatarUrl ?? DEFAULT_AVATAR,
        id,
        createdAt,
      };

      PEOPLE.set(id, person);

      return EMPTY;
    } else {
      return throwError(new Error(`Person with id "${id}" does not exist`));
    }
  }

  public deletePerson(id: string): Observable<never> {
    if (PEOPLE.has(id)) {
      PEOPLE.delete(id);

      return EMPTY;
    } else {
      return throwError(new Error(`Person with id "${id}" does not exist`));
    }
  }
}
