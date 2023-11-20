import { Component, OnInit } from '@angular/core';
import { CustomerCompositeService } from '@savvy/customer-composite';
import { Validators } from '@angular/forms';
// import { EnvId } from '@savvy/booking';

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
  bookingDefinitionId = '';
  error!: string;
  toastr: any;

  constructor(
    private customerCompositeService: CustomerCompositeService
  ) {

  }

  password: string | undefined;
  showPassword: boolean = false;
  show = false;


  ngOnInit() {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
    this.password = 'password';
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onRegister() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      firstName: '',
      lastName: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
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
