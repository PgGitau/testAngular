import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerdashboardRoutingModule } from './sellerdashboard-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MycoffeeComponent } from './components/mycoffee/mycoffee.component';
import { SellerdashboardComponent } from './sellerdashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    ProfileComponent,
    MycoffeeComponent,
    SellerdashboardComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SellerdashboardRoutingModule
  ]
})
export class SellerdashboardModule { }
