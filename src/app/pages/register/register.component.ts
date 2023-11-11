import { Component, OnInit } from '@angular/core';
import { CustomerCompositeService } from '@savvy/customer-composite';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  signupUsers: any[] = [];
  signupObj: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  isFormSubmitted: boolean | undefined;
  form: any;
  error!: string;
  toastr: any;

  constructor(
    private customerCompositeService: CustomerCompositeService
  ) {

  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onRegister() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  signIn() {
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    this.customerCompositeService.customerRegistration(this.form.value).subscribe((res) => {
      this.signIn();
    }, (error: any) => {
      if (error.status === 409) {
        this.error = 'Customer already exists';
        this.toastr.error('Customer already exists', 'Error');
      }
    });

  }
}
