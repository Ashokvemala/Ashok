import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  confirmPassword: any;
  data: any = [];
  dataobj: any = {};

  constructor(private api: ApiService){}

  onSubmit() {
    this.dataobj={firstName : this.firstName, lastName: this.lastName,email : this.email,password:this.password,confirmPassword:this.confirmPassword}
    this.api.addvalues(this.dataobj,"/kumar").subscribe((res)=> {
      console.log(res);
      
    })
    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.confirmPassword) {
      console.log('Please fill in all the required fields.');
      return;
    }
      

    this.data.push(this.dataobj);
     console.log(this.data);
    this.firstName = "";
    this.lastName = "";
    this.email="";
    this.password = "";
    this.confirmPassword="";
  }

}

