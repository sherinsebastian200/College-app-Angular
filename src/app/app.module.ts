import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCollegeComponent } from './home-college/home-college.component';
import { ContactCollegeComponent } from './contact-college/contact-college.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCollegeComponent,
    ContactCollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
