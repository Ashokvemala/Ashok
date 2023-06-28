import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  // string interpolistion //

  name1 = "i am innocent boy"
  // property binding //
  img = "https://assets-global.website-files.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image-p-1080.jpeg"
  isDisabled = false
  classname = "test"
  color: object = {
    color: 'pink',
    background: 'gray',
    border: '5px solid'
  }
  // event binding
  value = "ashok"
  oninputvalue(event: any) {
    console.log("enterd.value");
    this.value = event.value
  }
  // twowaydatabinding
  name: string = "";
// ngclass
  isactive = false
  makeactive() {
    this.isactive = true
  }
// ngstyle
  textColor = 'red';
  fontSize = 16;
// ngif
hide = false
unhide(){
  this.hide=true
}
//ngfor
  // users = [
  //   {
  //     name: "Ashok",
  //     mobile: 2,
  //     email: "ashok45678@gmail.com"
  //   },
  //   {
  //     name: "Ashok",
  //     mobile: 2,
  //     email: "ashok45678@gmail.com"
  //   },
  //   {
  //     name: "Ashok",
  //     mobile: 2,
  //     email: "ashok45678@gmail.com"
  //   },
  //   {
  //     name: "Ashok",
  //     mobile: 2,
  //     email: "ashok45678@gmail.com"
  //   },
  //   {
  //     name: "Ashok",
  //     mobile: 2,
  //     email: "ashok45678@gmail.com"
  //   },
  // ]
// ngswitch
  n1: number = 10;
  n2: number = 20;
  op: string = "+"
// input decarator p to c
  @Input() userdata: any[] = [];

  //  input taking value
  userValue: any = "";
  emailValue: any = "";
  phonenumberValue: any = "";
  data: any = [];
  dataobj: any = {};
  pushing() {
    
    this.dataobj={username : this.userValue,email : this.emailValue,phonenumber : this.phonenumberValue}

    this.data.push(this.dataobj);
     console.log(this.data);
    this.userValue = "";
    this.emailValue = "";
    this.phonenumberValue = "";
  }
  
// c to p output decarator
  
@Output() clickedindex:EventEmitter<any>= new EventEmitter();
 
deleteindex(index:number){
  this.clickedindex.emit(index);
}

}




