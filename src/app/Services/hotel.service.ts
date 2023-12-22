import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../Dashboard/form-hotel/form-hotel.component';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseUrl = 'http://localhost:3000/hotel';

  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }

  addHotel(hotel: Hotel): Observable<any> {
    return this.http.post(`${this.baseUrl}/ajout`, hotel);
  }

  updateHotel(hotel: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${hotel._id}`, hotel);
  }
  getHotelById(_id: string): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.baseUrl}/getbyid/${_id}`);
  }
}
