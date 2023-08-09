import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './warehousecomponents/home/home.component';
import { InventoryComponent } from './warehousecomponents/inventory/inventory.component';
import { SidenavComponent } from './warehousecomponents/sidenav/sidenav.component';
// import { WarehouseDashboardComponent } from './warehouse-dashboard/warehouse-dashboard/warehouse-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component:HomepageComponent },
  { path: 'profile', component:InventoryComponent },
  { path: 'sidenav', component:SidenavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
