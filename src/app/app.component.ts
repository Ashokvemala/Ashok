import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project';

  //  input decarator p to c  && c to p
  users=[
    {name:"Ashok",
     mobile:345678990,
    email:"ashok45678@gmail.com"
     },
     {name:"kumar",
     mobile:987654876,
    email:"kumar45678@gmail.com"
     },
     {name:"jay",
     mobile:567890098,
    email:"jay45678@gmail.com"
     },
     {name:"sandy",
     mobile:45678900,
    email:"sandy45678@gmail.com"
     },
     {name:"dharni",
     mobile:345678990,
    email:"dharni45678@gmail.com"
     },
  ]


  deleterecord(event:any){
    this.users.splice(event,1)
  }

}
