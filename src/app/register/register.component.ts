import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from "@angular/router";

interface User {
  name: string;
  LastName: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    name: '',
    LastName: '',
    password: '',
    email: '',
  };

  constructor(public _user: UserService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    // Send user data as JSON payload
    this._user.register(this.user)
      .subscribe(
        res => {
          // Successful registration, navigate to login page
          this.router.navigate(['/login']);
        },
        error => {
          // Handle error (e.g., display an error message)
          console.error('Registration failed:', error);
        }
      );
  }
}
