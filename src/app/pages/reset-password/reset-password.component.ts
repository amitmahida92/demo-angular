import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  newPassword: string = '';
  confirmPassword: string = '';
  constructor(private authService: AuthService) { }

  resetPassword() {
    this.authService.resetPassword(this.newPassword, this.confirmPassword)
      .subscribe(
        () => {

        },
        (error) => {

        }
      );
  }
}

