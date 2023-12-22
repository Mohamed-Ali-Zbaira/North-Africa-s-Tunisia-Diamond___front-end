// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.url}register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.url}login`, user);
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    return !!token; // Convert to boolean
  }

  getUserRole(): string {
    // Implement logic to get user role if needed
    // You might need to make an additional HTTP request to get the user's role
    return localStorage.getItem('role') || 'user'; // Replace with actual logic
  }
}
