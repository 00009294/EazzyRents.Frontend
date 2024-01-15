// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.authService.login(loginData).subscribe(
        data => {
          console.log('Login response:', data);
          // Handle successful login, e.g., navigate to another page
        },
        error => {
          console.error('Error during login:', error);
          // Handle login error, e.g., display an error message
        }
      );
    } else {
      // Form is not valid, handle accordingly (show validation errors, etc.)
    }
  }
}
