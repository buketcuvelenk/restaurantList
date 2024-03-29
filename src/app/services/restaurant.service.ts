import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'https://smarty.kerzz.com:4004/api/mock/getFeed'; 
  constructor(private http: HttpClient) { }


  getFeedData(skip: number, limit: number, latitude: number, longitude: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'apiKey': 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2'
      })
    };
     
     const requestBody = {
      skip: 0,
      limit: 0,
      latitude: 0,
      longitude:0
    };


    return this.http.post(this.apiUrl,requestBody, httpOptions);
  }
}