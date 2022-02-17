import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SigninComponent } from './pages/signin/signin.component';
import { P2pComponent } from './pages/p2p/p2p.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { AirparcelComponent } from './pages/airparcel/airparcel.component';
import { SmeComponent } from './pages/sme/sme.component';
import { LinehaulComponent } from './pages/linehaul/linehaul.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { ReachComponent } from './pages/reach/reach.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'menu', component:MenuComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'admin', component:AdminComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'p2p', component:P2pComponent},
  {path: 'services', component:ServicesComponent},
  {path:'login', component:LoginComponent},
  {path:'merchant', component:MerchantComponent},
  {path: 'air', component:AirparcelComponent},
  {path: 'sme', component:SmeComponent},
  {path: 'haul', component:LinehaulComponent},
  {path: 'ware', component:WarehouseComponent},
  {path: 'reach', component:ReachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
