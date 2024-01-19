import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../services/real-estate.service';


@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {
  
  data = {
    title: 'Real Estate List'
  }  

  constructor(private realEstateService: RealEstateService) { }

  ngOnInit(): void {
  }
  onKeyUp(text: string){
    this.data.title = text;
  }
}
