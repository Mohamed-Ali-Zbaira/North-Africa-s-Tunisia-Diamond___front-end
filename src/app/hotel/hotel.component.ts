import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../Services/hotel.service';

export interface Hotel {
  _id: string;
  id: string;
  title: string;
  rangshotel: number;
  price: number;
  localisation: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService, private router: Router) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getAllHotels().subscribe(
      (data) => {
        this.hotels = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des hôtels', error);
      }
    );
  }

  viewHotelDetails(hotelId: string) {
    this.router.navigate(['/detailshotel', hotelId]);
  }
}
