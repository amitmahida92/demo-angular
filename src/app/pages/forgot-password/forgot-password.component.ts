import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

email : string = '';
  id: string = '';
  error = false;


  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/api/reset-password', { email: this.email })
      .subscribe(
        (response: any) => {

        },

      );
  }
}
