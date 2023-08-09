import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehousedashboardComponent } from './warehousedashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'warehouse', component: WarehousedashboardComponent,
    children: [
      {path: 'inventory', component: InventoryComponent},
      {path: 'users', component: UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousedashboardRoutingModule { }
