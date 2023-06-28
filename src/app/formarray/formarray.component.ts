import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent {

  constructor(private fb: FormBuilder) { }
  studentForm!: FormGroup;
  ngOnInit() {
    this.studentForm = this.fb.group(
      {
        name: ['', Validators.required],
        age: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
        class: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        marks: [''],
        sports: this.fb.array([])
      }
    )
  }

  returnFormarray() {
    return this.studentForm.get('sports') as FormArray;
  }

  addsport() {
    const sportGroup = this.fb.group({
      name: ['']
    });
    console.log(this.returnFormarray());
    
    this.returnFormarray().push(sportGroup);
  }

  remove(index: number) {
    this.returnFormarray().removeAt(index);
  }



  dataarray: any = [];
  isFormInvalid = false;

  onSubmit() {
    console.log(this.studentForm);
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
