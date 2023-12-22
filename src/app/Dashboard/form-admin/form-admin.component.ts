import { Component } from '@angular/core';
import { AdminService } from '../../Services/admin.service';

export interface User {
  name: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent {
  user: User = {
    name: '',
    lastName: '',
    password: '',
    email: '',
    role: ''
  };

  showAlert: boolean = false;

  constructor(private adminService: AdminService) { }

  onSubmit() {
    this.adminService.addUser(this.user).subscribe(
      response => {
        console.log('Utilisateur ajouté avec succès', response);
        this.showSuccessAlert();
        this.resetForm();
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
        // Affichez une alerte d'erreur si nécessaire
      }
    );
  }

  showSuccessAlert() {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 7000); // Masquer l'alerte après 10 secondes
  }

  resetForm() {
    this.user = {
      name: '',
      lastName: '',
      password: '',
      email: '',
      role: ''
    };
  }
}
