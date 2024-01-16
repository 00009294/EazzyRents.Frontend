import { Component, Input, OnInit } from '@angular/core';
import { RealEstate } from '../models/RealEstate';
import { RealEstateStatus } from '../models/RealEstateStatus';
import { RealEstateService } from '../services/real-estate.service';

@Component({
  selector: 'app-real-estate-item',
  templateUrl: './real-estate-item.component.html',
  styleUrl: './real-estate-item.component.css'
})
export class RealEstateItemComponent implements OnInit{
  @Input() imageSrc: string = '';
  realEstates: RealEstate[] = [{
    id: 1,
    description: 'Example Description',
    address: 'Example Address',
    price: 100000,
    phoneNumber: '123-456-7890',
    ownerId: 1,
    images: [
      {id: 1, name: ""}
    ],
    realEstateStatus: RealEstateStatus.Active,
  }];

 
  constructor(private realEstateService: RealEstateService) {
    
  }

  ngOnInit(): void{
    this.realEstateService.getAll().subscribe(data =>{
      this.realEstates = data;
    });
  }
}
