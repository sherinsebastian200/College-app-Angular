import { Component } from '@angular/core';

@Component({
  selector: 'app-student-college',
  templateUrl: './student-college.component.html',
  styleUrls: ['./student-college.component.css']
})
export class StudentCollegeComponent {
  id=""
  firstname=""
  lastname=""
  houseno=""
  street=""
  pincode=""
  district=""
  country=""
  mobno=""
  email=""
  parentname=""
  gender=""
 joindate=""
  username=""
  password=""
  confirmpassword=""

  studentReg=()=>
  {
    let data:any= {"id":this.id,"firstname":this.firstname,"lastname":this.lastname,"houseno":this.houseno,"street":this.street,"pincode":this.pincode,"district":this.district,"country":this.country,"nmobno":this.mobno,"email":this.email,"parentname":this.parentname,"gender":this.gender,"joindate":this.joindate,
  "username":this.username,
  "password":this.password,
  "confirmpassword":this.confirmpassword
  }
  console.log(data)
  if (this.password=="12345" && this.confirmpassword=="12345") {
    alert("Registered Successfully")
    
  } else {
    alert("Password and confirm password doesn't match")
    
  }

  
}


}





