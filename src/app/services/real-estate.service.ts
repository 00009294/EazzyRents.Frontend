import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  private apiUrl = 'https://your-api-url/api/real-estate'; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  create(command: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, command);
  }

  update(command: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, command);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/id?id=${id}`);
  }

  getByAddress(address: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/address?address=${address}`);
  }

  getByPrice(price: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/price?price=${price}`);
  }
}
