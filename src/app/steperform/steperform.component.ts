import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-steperform',
  templateUrl: './steperform.component.html',
  styleUrls: ['./steperform.component.css']
})
export class SteperformComponent implements OnInit {
  isFormInvalid = false; 
  isEdit=false;
  studentForm = new FormGroup({
    name: new FormControl("", Validators.required),
    age: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
  });
  contactForm = new FormGroup({
    password: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
    Email: new FormControl("", [Validators.required, Validators.email])
  });
  addressForm = new FormGroup({
    address: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
  });

  constructor(private api: ApiService) { }
  dataarray: any = [];
  selectedUser: any;
  ngOnInit() {
    this.api.getData("/kumar").subscribe((res) => {
      this.dataarray = res;
    })
  }

  deleat(user: any) {
    this.api.deleat(`/kumar/${user.id}`)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.api.getData("/kumar").subscribe((res) => {
            this.dataarray = res;
          })

        }
      )
  }

  edit(user: any) {
    this.isEdit=true;
    this.studentForm.controls["name"].setValue(user.name)
    this.studentForm.controls["age"].setValue(user.age)
    this.contactForm.controls["password"].setValue(user.password)
    this.contactForm.controls["Email"].setValue(user.Email)
    this.addressForm.controls["address"].setValue(user.address)
    this.addressForm.controls["state"].setValue(user.state)
    this.selectedUser = user;
    

  }
  update() {
    this.isEdit=false;
    let emailExist = this.dataarray.findIndex((item: any) => {
      return item.Email === this.contactForm.controls["Email"].value
    })
    console.log(emailExist);
    if (emailExist) {
      let data = { ...this.studentForm.value, ...this.contactForm.value, ...this.addressForm.value };
      console.log("data",data);
      
      this.api.update(data, "/kumar/"+ this.selectedUser.id).subscribe(
          (response: any) => {
            console.log(response);
            this.dataarray.splice(emailExist,1,response)
            this.api.getData("/kumar").subscribe((res) => {
              this.dataarray = res;
              this.studentForm.reset();
              this.addressForm.reset();
              this.contactForm.reset();
            })
           
          }
        )
    }
  }
  onSubmit() {
    if(!this.isEdit){
    if (this.studentForm.valid && this.addressForm.valid && this.contactForm.valid) {
      this.isFormInvalid = false;
      let data = { ...this.studentForm.value, ...this.contactForm.value, ...this.addressForm.value }
      console.log(this.studentForm.value); console.log(this.addressForm.value); console.log(this.contactForm.value);
      this.api.addvalues(data, "/kumar").subscribe((res) => {
        console.log(res);
        this.dataarray.push(res);
        this.studentForm.reset();
        this.addressForm.reset();
        this.contactForm.reset();
      })
      // this.studentForm.reset();
      //  console.log(this.dataarray);
      // this.dataarray.push({...this.studentForm.value,...this.contactForm.value,...this.addressForm.value});
      // this.studentForm.reset();
      // console.log(this.dataarray);
    }
    else {
      this.isFormInvalid = true;
    }
  }
  }



  step: number = 1;
  prevstep() {
    this.step--;
  }
  nextstep() {
    if (this.studentForm.valid) {
      this.step++;
    } else {
      alert("please enter valid details")
    }
  }

  nextstepp() {
    console.log(this.contactForm.controls);

    if (this.contactForm.valid) {
      this.step++;
    } else {
      alert("please enter valid details")
     }
  }

}
