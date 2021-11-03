import { PartialPerson, Person } from 'app/people/models/person.model';
import {
  PaginatedPeople,
  PaginationOptions,
} from 'app/people/services/people.service';
import { EMPTY, Observable, of } from 'rxjs';

export class PeopleServiceStub {
  public getPerson(id: string): Observable<Person> {
    return of({
      id,
      createdAt: 1,
      name: 'Ailee Gladeche',
      company: 'Flatley and Sons',
      avatarUrl: 'http://placehold.it/32x32',
      email: 'agladeche0@dmoz.org',
      phone: '(378) 3377843',
      address: '530 Orin Street',
      about:
        'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
      tags: ['duis', 'at'],
    });
  }

  public getPeople(options?: PaginationOptions): Observable<PaginatedPeople> {
    return of({
      people: [
        {
          id: '1',
          createdAt: 1,
          name: 'Ailee Gladeche',
          company: 'Flatley and Sons',
          avatarUrl: 'http://placehold.it/32x32',
          email: 'agladeche0@dmoz.org',
          phone: '(378) 3377843',
          address: '530 Orin Street',
          about:
            'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
          tags: ['duis', 'at'],
        },
      ],
      currentPage: 1,
      lastPage: 1,
      currentIndex: 1,
      lastIndex: 1,
    });
  }

  public createPerson(newPerson: PartialPerson): Observable<Person> {
    return of({
      id: '1',
      createdAt: 1,
      name: 'Ailee Gladeche',
      company: 'Flatley and Sons',
      avatarUrl: 'http://placehold.it/32x32',
      email: 'agladeche0@dmoz.org',
      phone: '(378) 3377843',
      address: '530 Orin Street',
      about:
        'vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
      tags: ['duis', 'at'],
    });
  }

  public editPerson(
    id: string,
    updatedPerson: PartialPerson,
  ): Observable<never> {
    return EMPTY;
  }

  public deletePerson(id: string): Observable<never> {
    return EMPTY;
  }
}
