import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://api.example.com/data';
  constructor(private http:HttpClient) { }

  getDetails(){
    
  }
}
