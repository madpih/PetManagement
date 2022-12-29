import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person';
import { RegistrationService } from '../registration.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  person: Person = new Person();
  msg='';
  constructor(private service: RegistrationService,
    private router: Router,
    ) {}

  ngOnInit(){
    
  }
      
  loginUser(){
    this.service.loginUser(this.person).subscribe({
        next: (data) => this.goToPetList(),
        error: (error) => this.displayMsg(),
        complete: () => console.log("login complete") 
     })
  }

  goToPetList(){
    this.router.navigate(['/pets'])
  }

  displayMsg(){
    this.msg="Bad Credentials, please enter valid email and password";
  }

  gotoregistration(){
    this.router.navigate([`/registration`])
  }
}

