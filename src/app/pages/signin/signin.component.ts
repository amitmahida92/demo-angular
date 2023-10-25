import { Component, Input, OnInit } from '@angular/core';

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

  isEmailValid: boolean = true;

  showErrorMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onSignIn(){
    this.signinUsers.push(this.signinObj);
    localStorage.setItem('signinUsers',JSON.stringify(this.signinUsers));
  }

  checkPassword(password: string) {
    const isPasswordCorrect = this.validatePassword(password);

    if (!isPasswordCorrect) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }
  }

  private validatePassword(password: string): boolean {
    const correctPassword = 'yourCorrectPassword';
    return password === correctPassword;
  }
}




