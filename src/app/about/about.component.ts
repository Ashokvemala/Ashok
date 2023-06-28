import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

firstname=new FormControl("")

add(){
  console.log(this.firstname);
}

// formgroup // 

dataarray: any = [];
  studentForm = new FormGroup({
    name: new FormControl("", Validators.required),
    age: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
    class: new FormControl("", Validators.required),
    Email: new FormControl("", [Validators.required, Validators.email]),
    marks: new FormControl("")
  });

  isFormInvalid = false;
  onSubmit() {
    if (this.studentForm.valid) {
      this.isFormInvalid = false;
      console.log(this.studentForm.value);
      this.dataarray.push(this.studentForm.value);
      this.studentForm.reset();
      console.log(this.dataarray);
    }
    else {
      this.isFormInvalid = true;
    }
  }
 
  

}
