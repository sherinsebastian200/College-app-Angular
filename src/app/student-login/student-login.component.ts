import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  constructor(private route:Router){}
  studentid=""
  password=""

 
    studentlog=()=>
    {
      let data:any= {"studentid":this.studentid,"password":this.password}
    if(this.studentid=="1122"&&this.password=="12345"){
      alert("valid credentials")
    }else{
      alert("Not a valid credentials")
    }
  }
}




