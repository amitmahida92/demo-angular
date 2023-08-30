import { Component, OnInit } from '@angular/core';
import { CustomerCompositeService } from '@savvy/customer-composite';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(
    private customerCompositeService: CustomerCompositeService
  ) {

  }

  register() {
    // this.isFormSubmitted = true;
    // if (this.form.invalid) {
    //   return;
    // }

    this.customerCompositeService.customerRegistration(this.form.value).subscribe((res) => {
      // this.login();
    }, (error: any) => {
      // if (error.status === 409) {
      //   this.error = 'Customer already exists';
      //   this.toastr.error('Customer already exists', 'Error');
      // }
    });
  }
}

