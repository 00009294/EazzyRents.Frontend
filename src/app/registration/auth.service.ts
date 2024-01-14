// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7061/swagger';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    const url = `${this.apiUrl}api/Authentication/register`;
    return this.http.post(url, userData);
  }

  login(loginData: any): Observable<any> {
    const url = `${this.apiUrl}/api/Authentication/login`;
    return this.http.post(url, loginData);
  }
}
