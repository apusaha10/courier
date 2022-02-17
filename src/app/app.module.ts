import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
// Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './sharepage/header/header.component';
import { SigninComponent } from './pages/signin/signin.component';
import { P2pComponent } from './pages/p2p/p2p.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { CardComponent } from './pages/card/card.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { AirparcelComponent } from './pages/airparcel/airparcel.component';
import { SmeComponent } from './pages/sme/sme.component';
import { LinehaulComponent } from './pages/linehaul/linehaul.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';
import { ReachComponent } from './pages/reach/reach.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    SidenavComponent,
    HeaderComponent,
    SigninComponent,
    P2pComponent,
    ServicesComponent,
    LoginComponent,
    CardComponent,
    MerchantComponent,
    AirparcelComponent,
    SmeComponent,
    LinehaulComponent,
    WarehouseComponent,
    ReachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    FormsModule,
    MatMenuModule,
    MatDividerModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
