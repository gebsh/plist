import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleListPaginationComponent } from './components/people-list-pagination/people-list-pagination.component';
import { PeopleListSortArrowComponent } from './components/people-list-sort-arrow/people-list-sort-arrow.component';
import { PersonAvatarComponent } from './components/person-avatar/person-avatar.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonPageHeaderComponent } from './components/person-page-header/person-page-header.component';
import { PersonTagComponent } from './components/person-tag/person-tag.component';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleListPaginationComponent,
    PeopleListSortArrowComponent,
    PersonAvatarComponent,
    PersonCreateComponent,
    PersonDetailsComponent,
    PersonEditComponent,
    PersonFormComponent,
    PersonPageHeaderComponent,
    PersonTagComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    PeopleRoutingModule,
  ],
  exports: [],
})
export class PeopleModule {}
