import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HotelComponent } from './hotel/hotel.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UserComponent } from './dashboard/user/user.component';
import { ListeAdminComponent } from './dashboard/liste-admin/liste-admin.component';
import { ListeHotelComponent } from './Dashboard/liste-hotel/liste-hotel.component';
import { FormAdminComponent } from './Dashboard/form-admin/form-admin.component';
import { FormHotelComponent } from './Dashboard/form-hotel/form-hotel.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'detailshotel', component: DetailsComponent },
  { path: 'hotels', component: HotelComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component:AdminComponent },
  {path:'alluser',component:UserComponent},
  {path:'liste-admin',component:ListeAdminComponent},
  {path:'liste-hotel',component:ListeHotelComponent},
  {path:'form-admin',component:FormAdminComponent},
  {path:'form-hotel',component:FormHotelComponent},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
