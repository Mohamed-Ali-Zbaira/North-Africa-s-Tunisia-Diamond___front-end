import {Component, OnInit} from '@angular/core';
import {HotelService} from "../Services/hotel.service";

export interface Hotel {
  _id: string;
  title: string;
  rangshotel: number;
  price: number;
  localisation: string;
  image: string;
  avis: string;

  description: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

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
}
