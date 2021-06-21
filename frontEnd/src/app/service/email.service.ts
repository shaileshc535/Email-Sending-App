import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl="http://localhost:3000/email"

  constructor(private http: HttpClient) { }

  postEmail(email:any)
  {
    // return this.http.post(`${this.baseUrl}/`, data)
    return this.http.post(this.baseUrl, email);
  }

}
