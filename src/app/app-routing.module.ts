import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EtkinliklerComponent } from './etkinlikler/etkinlikler.component';
import { HomeComponent } from './home/home.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { LoginComponent } from './login/login.component';
import { MassagereservationComponent } from './massagereservation/massagereservation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SigninComponent } from './signin/signin.component';
import { SpareservationComponent } from './spareservation/spareservation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'rooms', component: RoomsComponent},
  { path: 'spareservation', component: SpareservationComponent},
  { path: 'massagereservation', component: MassagereservationComponent},
  { path: 'etkinlikler', component: EtkinliklerComponent},
  { path: 'iletisim', component: IletisimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}