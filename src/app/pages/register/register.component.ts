import { Component, OnInit } from '@angular/core';
import { CustomerCompositeService } from '@savvy/customer-composite';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  bookingDefinitionId = '';
  error!: string;
  toastr: any;
  password: string | undefined;
  showPassword: boolean = false;
  show = false;

  form: FormGroup;
  isValid: any;

  constructor(
    private customerCompositeService: CustomerCompositeService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/.*[a-zA-Z].*/), Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
    this.password = 'password';
  }

  onClick() {
    this.password = (this.password === 'password') ? 'text' : 'password';
    this.show = !this.show;
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
      email: '',
      password: ''
    };
  }

  signIn() {
    this.isFormSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    this.customerCompositeService.customerRegistration(this.form.value).subscribe(
      (res) => {

      },
      (error: any) => {
        if (error.status === 409) {
          this.error = 'Customer already exists';
          this.toastr.error('Customer already exists', 'Error');
        }
      }
    );
  }
}
