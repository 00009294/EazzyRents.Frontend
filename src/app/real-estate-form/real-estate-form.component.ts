import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RealEstate } from '../models/RealEstate';
import { RealEstateService } from '../services/real-estate.service';

@Component({
  selector: 'app-real-estate-form',
  templateUrl: './real-estate-form.component.html',
  styleUrls: ['./real-estate-form.component.css']
})
export class RealEstateFormComponent implements OnInit {
  realEstateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private realEstateService: RealEstateService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.realEstateForm = this.formBuilder.group({
      id: [null], // You might want to hide this field or generate it on the server
      description: ['', Validators.required],
      address: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      phoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)],
      ownerId: [null, Validators.required],
      images: [[]], // You may handle file uploads differently
      realEstateStatus: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.realEstateForm.valid) {
      const newRealEstate: RealEstate = this.realEstateForm.value;
      // You may want to call a service method to save the new real estate
      // this.realEstateService.createRealEstate(newRealEstate).subscribe(/* handle response */);
    } else {
      // Handle form validation errors
    }
  }
}
