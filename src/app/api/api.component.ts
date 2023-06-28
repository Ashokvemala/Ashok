import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  registrationform = {} as FormGroup
  userData: any = [];
  selectedUser: any;

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.registrationform = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
    })
    this.api.getData('/ashok')
      .subscribe(
        (result: any) => {
          console.log(result);
          this.userData = result;
        }
      )
  }
  submitform() {
    this.api.addvalues(this.registrationform.value, "/ashok")
      .subscribe(
        (data: any) => {
          console.log(data);
          this.userData.push(data);
        }
      )
  }
  deleat(user: any) {
    this.api.deleat(`/ashok/${user.id}`)
      .subscribe(
        (data: any) => {
          console.log(data);
           this.userData(user)

        }
      )
  }
  edit(user:any){
    this.registrationform.controls["firstName"].setValue(user.firstName)
    this.registrationform.controls["lastName"].setValue(user.lastName)
    this.registrationform.controls["email"].setValue(user.email)
    this.selectedUser=user
  }
  update(){
    
    this.api.update(this.registrationform.value, "/ashok/"+this.selectedUser.id)
    .subscribe(
      (data:any)=>{
        console.log(data);
       // this.userData(user)
      }
    )
  }

}


