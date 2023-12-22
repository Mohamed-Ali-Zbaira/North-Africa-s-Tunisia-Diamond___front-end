import { Component ,OnInit} from '@angular/core';

import { Router } from "@angular/router";
import { UserDashService } from '../../Services/userdash.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  showAlert: boolean = false;

  constructor(
    private UserDashService: UserDashService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.UserDashService.getAllUsers().subscribe(
      (data: any[]) => {
        this.users = data.map(user => ({
          id: user._id,
          name: user.name,
          LastName: user.LastName,
          email: user.email
        }));
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    );
  }

  deleteUser(userId: string): void {
    this.UserDashService.deleteUser(userId).subscribe(
      () => {
        console.log('Utilisateur supprimé avec succès');
        this.loadUsers(); // Réactualisez la liste des utilisateurs après la suppression
        this.showAlert = true;

        // Masquer l'alerte après 7 secondes
        setTimeout(() => {
          this.showAlert = false;
        }, 7000);
      },
      (error: any) => {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      }
    );
  }
}