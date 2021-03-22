import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='avengers';
  password='';
  errorMessage='Invalid credentials';
  invalidLogin=false;


  constructor(private router : Router) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    if(this.username==='avengers' && this.password==='assemble') {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  }

}
