// user-dash.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDashService {
  private url = 'http://localhost:3000/users/'; // Assurez-vous de mettre votre URL correcte

  constructor(private http: HttpClient) { }

  // Exemple de méthode pour récupérer tous les utilisateurs
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}getAll`);
  }
  // // Nouvelle méthode pour la mise à jour d'un utilisateur
  // updateUser(userId: string, updatedUserData: any): Observable<any> {
  //   return this.http.put<any>(`${this.url}update/${userId}`, updatedUserData);
  // }

  // Nouvelle méthode pour la suppression d'un utilisateur
  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.url}delete/${userId}`);
  }
}
