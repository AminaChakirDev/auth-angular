import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserDetails(username: string) {
    return this.http.get('http://localhost:8080/api/users/' + username);
  }

  getUsers() {
    return this.http.get('http://localhost:8080/api/users');
  }
}