// import { TestBed } from '@angular/core/testing';
// import { Person } from '../models/person';
// import { PeopleService } from './people.service';

// describe('PeopleService', () => {
//   let service: PeopleService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(PeopleService);
//   });

//   it('should limit data', (done) => {
//     const expected: Person[] = [
//       {
//         id: '5e39278ecc8cdd6643e9fb63',
//         avatarUrl: 'http://placehold.it/32x32',
//         name: 'Schroeder Bryan',
//         company: 'MIXERS',
//         email: 'schroeder.bryan@mixers.io',
//         phone: '(902) 591-3371',
//         address: '257 Hornell Loop, Driftwood, Nevada, 925',
//         about:
//           'Aliqua proident eu consequat cillum laborum commodo. Exercitation voluptate sunt est culpa veniam exercitation voluptate incididunt labore amet esse. Duis proident adipisicing voluptate eu aliquip anim aute in consectetur nulla eiusmod consequat. Pariatur duis cillum ea nisi velit proident do nostrud non culpa amet nulla consectetur exercitation. Sit nostrud commodo irure ut voluptate id et irure eu quis. Quis deserunt sit culpa laborum tempor pariatur. Qui et cillum exercitation ut commodo.',
//         createdAt: 1424510706,
//         tags: ['sunt', 'nisi', 'occaecat', 'exercitation', 'ex'],
//       },
//       {
//         id: '5e39278ef970ba42114d6888',
//         avatarUrl: 'http://placehold.it/32x32',
//         name: 'Rojas Brock',
//         company: 'VIOCULAR',
//         email: 'rojas.brock@viocular.com',
//         phone: '(927) 536-3645',
//         address: '594 Poplar Street, Templeton, Kansas, 7946',
//         about:
//           'Commodo reprehenderit sit proident excepteur in eiusmod voluptate sint adipisicing ea irure deserunt culpa. Ipsum incididunt laborum consequat incididunt do laborum aute ut. Ut laborum amet labore occaecat do ea reprehenderit dolor culpa duis exercitation veniam dolor.',
//         createdAt: 1497632860,
//         tags: ['eu', 'pariatur', 'incididunt', 'ad', 'adipisicing'],
//       },
//     ];

//     service.getPeople(2).subscribe((people) => {
//       expect(people.length).toEqual(2);
//       expect(people).toEqual(expected);
//       done();
//     }, done.fail);
//   });

//   it('should paginate data', (done) => {
//     const expected: Person[] = [
//       {
//         id: '5e39278ef970ba42114d6888',
//         avatarUrl: 'http://placehold.it/32x32',
//         name: 'Rojas Brock',
//         company: 'VIOCULAR',
//         email: 'rojas.brock@viocular.com',
//         phone: '(927) 536-3645',
//         address: '594 Poplar Street, Templeton, Kansas, 7946',
//         about:
//           'Commodo reprehenderit sit proident excepteur in eiusmod voluptate sint adipisicing ea irure deserunt culpa. Ipsum incididunt laborum consequat incididunt do laborum aute ut. Ut laborum amet labore occaecat do ea reprehenderit dolor culpa duis exercitation veniam dolor.',
//         createdAt: 1497632860,
//         tags: ['eu', 'pariatur', 'incididunt', 'ad', 'adipisicing'],
//       },
//       {
//         id: '5e39278e8870e5a5597eabac',
//         avatarUrl: 'http://placehold.it/32x32',
//         name: 'Christie Acosta',
//         company: 'ZYTRAC',
//         email: 'christie.acosta@zytrac.biz',
//         phone: '(898) 522-2144',
//         address: '578 Hawthorne Street, Collins, Texas, 5196',
//         about:
//           'Laboris irure tempor non anim enim dolore. Ea cupidatat exercitation excepteur est. Velit aliquip anim ex anim officia reprehenderit sint cupidatat deserunt culpa consequat velit. Adipisicing ipsum ipsum commodo irure.',
//         createdAt: 1571255723,
//         tags: ['exercitation', 'exercitation', 'dolore', 'aliqua', 'ea'],
//       },
//     ];

//     service.getPeople(2, 1).subscribe((people) => {
//       expect(people.length).toEqual(2);
//       expect(people).toEqual(expected);
//     }, done.fail);
//   });
// });
