import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private apiUrl ='https://jsonplaceholder.typicode.com/photos?_limit=100';
  private apiUrl ='https://fakestoreapi.com/products'
  private fetchApi ='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  fetchDetails():Promise<any>{
    return this.http.get<any>(this.apiUrl).toPromise();
  }
}
