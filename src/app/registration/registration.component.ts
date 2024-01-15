// registration.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  userRoles: string[] = ['Guest', 'Landlord', 'Tenant'];

  
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    };
  

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      userRole: ['', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;

      this.authService.register(registrationData).subscribe(
        data => {
          console.log('Registration response:', data);
        },
        error => {
          console.error('Error during registration:', error);
        }
      );
    }
  }
}
