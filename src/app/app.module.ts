import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './warehousecomponents/home/home.component';
import { InventoryComponent } from './warehousecomponents/inventory/inventory.component';
import { SidenavComponent } from './warehousecomponents/sidenav/sidenav.component';
import { WarehousedashboardModule } from './warehousedashboard/warehousedashboard.module';
import { SellerdashboardModule } from './sellerdashboard/sellerdashboard.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InventoryComponent,
    SidenavComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WarehousedashboardModule,
    SellerdashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
