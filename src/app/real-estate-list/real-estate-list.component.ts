import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../services/real-estate.service';
import { RealEstate } from '../models/RealEstate';
import { RealEstateStatus } from '../models/RealEstateStatus';


@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {
  realEstates: RealEstate[] = [{
    id: 1,
    description: 'Example Description',
    address: 'Example Address',
    price: 100000,
    phoneNumber: '123-456-7890',
    ownerId: 1,
    images: [
      {id: 1, name: "image.png"},
      {id: 2, name: "image.png"},
      {id: 3, name: "image.png"},
      {id: 4, name: "image.png"}
    ],
    realEstateStatus: RealEstateStatus.Active,
  }];

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.realEstateService.getAll().subscribe(data => {
      this.realEstates = data;
    });
  }
}
