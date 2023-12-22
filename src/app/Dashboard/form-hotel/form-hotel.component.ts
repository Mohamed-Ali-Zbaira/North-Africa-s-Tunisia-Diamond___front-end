// form-hotel.component.ts
import { Component } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
// hotel.model.ts
export interface Hotel {
  title: string;
  price: number;
  phone: string;
  description: string;
  avis: string;
  localisation: string;
  image: string;
  rangshotel: number;
}

@Component({
  selector: 'app-form-hotel',
  templateUrl: './form-hotel.component.html',
  styleUrls: ['./form-hotel.component.css']
})
export class FormHotelComponent {
  hotel: Hotel = {
    title: '',
    price: 0,
    phone: '',
    description: '',
    avis: '',
    localisation: '',
    image: '',
    rangshotel: 0
  };

  constructor(private HotelService: HotelService) {}
  // onImageChange(event: any): void {
  //   const reader = new FileReader();
  //   if (event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       this.hotel.image = reader.result as string;
  //     };
  //   }
  // }
  showAlert: boolean = false;

  onSubmit(): void {
    this.HotelService.addHotel(this.hotel).subscribe(
      (response) => {
        // Handle success
        console.log('Hotel added successfully:', response);
        this.showAlert = true;

      },
      (error) => {
        // Handle error
        console.error('Error adding hotel:', error);
      }
    );
  }
}
