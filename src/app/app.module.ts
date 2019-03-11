import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {CustomerComponent} from './customer/customer.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ListcustomerComponent} from './listcustomer/listcustomer.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';

@NgModule({
  declarations: [AppComponent,
    LoginComponent,DashboardComponent,CustomerComponent,AboutusComponent,ListcustomerComponent,AddcustomerComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
