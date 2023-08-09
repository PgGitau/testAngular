import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerdashboardComponent } from './sellerdashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MycoffeeComponent } from './components/mycoffee/mycoffee.component';

const routes: Routes = [
  {
    path: 'seller', component: SellerdashboardComponent,
    children: [
      {path: '', component: ProfileComponent},
      // {path: 'profile', component: ProfileComponent},
      {path: 'mycoffee', component: MycoffeeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerdashboardRoutingModule { }
