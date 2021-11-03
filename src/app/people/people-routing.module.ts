import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';

const routes: Routes = [
  {
    path: 'create',
    component: PersonCreateComponent,
  },
  {
    path: 'details/:id',
    component: PersonDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: PersonEditComponent,
  },
  {
    path: '',
    component: PeopleListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
