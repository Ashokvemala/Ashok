import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataarray: any = [];
  studentForm = new FormGroup({
    
    Email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
    
  });
  // email: any;
  // password: any;

  constructor(private api: ApiService){}
  
  ngOnInit () {
    this.api.getData("/kumar").subscribe((res)=> {
      this.dataarray = res;
    })
  }
  isFormInvalid = false;
  onSubmit() {

    // this.dataarray={email : this.email,password:this.password}
    // this.api.addvalues(this.dataarray,"/kumar").subscribe((res)=> {
    //   console.log(res);
    // })
    
    if (this.studentForm.valid) {
      this.isFormInvalid = false;
      console.log(this.studentForm.value);
      this.api.addvalues(this.studentForm.value,"/kumar").subscribe((res)=> {
        console.log(res);
        this.dataarray.push(res);
      })
      this.studentForm.reset();
      console.log(this.dataarray);
    }
    else {
      this.isFormInvalid = true;
    }
  }
}
