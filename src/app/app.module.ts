import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SpareservationComponent } from './spareservation/spareservation.component';
import { MassagereservationComponent } from './massagereservation/massagereservation.component';
import { EtkinliklerComponent } from './etkinlikler/etkinlikler.component';
import { IletisimComponent } from './iletisim/iletisim.component';

import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    LoginComponent,
    SigninComponent,
    AboutusComponent,
    RoomsComponent,
    SpareservationComponent,
    MassagereservationComponent,
    EtkinliklerComponent,
    IletisimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,

    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}