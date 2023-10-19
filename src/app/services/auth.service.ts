import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  resetPassword(email: string, password: string) {
    const resetData = { email, password };
    return this.http.post('/api/reset-password', resetData);
  }
}



