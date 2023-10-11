import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinUsers: any[] = [];
  signinObj: any = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {

  }

  onSignIn(){
    this.signinUsers.push(this.signinObj);
    localStorage.setItem('signinUsers',JSON.stringify(this.signinUsers));
  }

}


