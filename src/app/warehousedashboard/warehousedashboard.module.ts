import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehousedashboardComponent } from './warehousedashboard.component';
import { WarehousedashboardRoutingModule } from './warehousedashboard-routing.module';
import { InventoryComponent } from './components/inventory/inventory.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    WarehousedashboardComponent,
    InventoryComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    WarehousedashboardRoutingModule
  ]
})
export class WarehousedashboardModule { }
