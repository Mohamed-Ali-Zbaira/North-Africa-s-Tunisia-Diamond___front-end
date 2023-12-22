import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';

@Component({
  selector: 'app-liste-hotel',
  templateUrl: './liste-hotel.component.html',
  styleUrls: ['./liste-hotel.component.css']
})
export class ListeHotelComponent implements OnInit {
  hotels: any[] = [];

  constructor(public hotelService: HotelService) {}

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

  deleteHotel(_id: number) {
    this.hotelService.deleteHotel(_id).subscribe(
      () => {
        // Rechargez les hôtels après la suppression
        this.loadHotels();
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'hôtel', error);
      }
    );
  }
  updateHotel(hotel: any) {
    this.hotelService.updateHotel(hotel).subscribe(
      () => {
        // Reload hotels after update
        this.loadHotels();
      },
      (error) => {
        console.error('Error updating hotel', error);
      }
    );
  }
}
