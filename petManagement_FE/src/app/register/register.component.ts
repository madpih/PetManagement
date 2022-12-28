import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  person: Person = new Person();
  msg='';

  constructor(private service: RegistrationService,private router: Router){ }

  ngOnInit(){ 

   }

  savePerson(){
    this.service.registerPerson(this.person).subscribe({
      next: (data) => this.goToLoginUser(),
      error: (error) => this.displayMsg(),
      complete: () => console.log("complete") 
})
      }

  goToLoginUser(){
    this.router.navigate([''])

  }

  displayMsg(){
    this.msg="User already exist";
  }
 
  onSubmit(){
    console.log(this.person);
    this.savePerson();
  }

  goToLogin(){
    this.router.navigate([`/login`])

}

}