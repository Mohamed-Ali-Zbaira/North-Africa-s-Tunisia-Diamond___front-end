import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { MapsComponent } from './maps/maps.component';
import { TestComponent } from './test/test.component';
import { HotelComponent } from './hotel/hotel.component';
import { FiltrationComponent } from './filtration/filtration.component';
import { DetailsComponent } from './details/details.component';
import { Page404Component } from './page404/page404.component';
import { ContactComponent } from './contact/contact.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import { UserComponent } from './dashboard/user/user.component';

import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

import { ListeAdminComponent } from './dashboard/liste-admin/liste-admin.component';

import { ListeHotelComponent } from './Dashboard/liste-hotel/liste-hotel.component';
import { FormAdminComponent } from './Dashboard/form-admin/form-admin.component';
import { FormHotelComponent } from './Dashboard/form-hotel/form-hotel.component';
import { UpdateUserComponent } from './Dashboard/update-user/update-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateHotelModalComponent } from './update-hotel-modal/update-hotel-modal.component';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';
import { NavbarHotelComponent } from './navbar-hotel/navbar-hotel.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    MapsComponent,
    TestComponent,
    HotelComponent,
    FiltrationComponent,
    DetailsComponent,
    Page404Component,
    ContactComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ProfileComponent,
    UserComponent,
    SidebarComponent,
    ListeAdminComponent,
    ListeHotelComponent,
    FormAdminComponent,
    FormHotelComponent,
    UpdateUserComponent,
    UpdateHotelModalComponent,
    AdditionalInformationComponent,
    NavbarHotelComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
