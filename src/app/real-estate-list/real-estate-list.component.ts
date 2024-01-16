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
  

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
   
  }
}
