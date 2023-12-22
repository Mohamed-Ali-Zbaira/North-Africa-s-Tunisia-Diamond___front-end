// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public _user: UserService, private router: Router) {}

  ngOnInit(): void {
    this._user.getUserRole();
  }

  Deconnexion() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
