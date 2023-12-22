import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   utilisateur={
    email:'',
    password:''
   }
   constructor(private _user:UserService, private router:Router){}
   ngOnInit(): void {

   }
   token:any;
   login(){
      this._user.login(this.utilisateur)
      .subscribe(
        res=>{
          localStorage.setItem('role',res.role);
          console.log('res ' , res)
          if(res.role == 'admin')
          {
            console.log('enter admin')
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['']);

          }
           this.token=res;
           localStorage.setItem('token',this.token.mytoken)
           console.log(this.utilisateur);
           
        },
        err=>{
          console.log(err);
          
        }
      );
   }
}
