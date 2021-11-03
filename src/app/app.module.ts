import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleModule } from './people/people.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [AppRoutingModule, BrowserModule, PeopleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
