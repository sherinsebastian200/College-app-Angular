import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCollegeComponent } from './home-college/home-college.component';
import { ContactCollegeComponent } from './contact-college/contact-college.component';
import { StudentCollegeComponent } from './student-college/student-college.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentLoginComponent } from './student-login/student-login.component';

const myRoute:Routes=[
  {
    path:"",
    component:HomeCollegeComponent
  },
  {
    path:"contact",
    component:ContactCollegeComponent
  },
  {
    path:"student",
    component:StudentCollegeComponent
  },
  {
    path:"studentlogin",
    component:StudentLoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeCollegeComponent,
    ContactCollegeComponent,
    StudentCollegeComponent,
    NavBarComponent,
    StudentLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
