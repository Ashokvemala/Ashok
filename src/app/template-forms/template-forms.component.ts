import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {
 
  
  studentform:any
  dataarray: any = [];
  isFormInvalid=false
  name:any
  email:any
  class:any
  age:any
  marks:any
  onSubmit(form:NgForm){
    console.log(form);
    debugger
    if (form.valid) {
      this.isFormInvalid = false;
      this.dataarray.push(form.value);
      form.reset();
      console.log(this.dataarray);
    }
    else {
      this.isFormInvalid = true;
    }
  }

}
