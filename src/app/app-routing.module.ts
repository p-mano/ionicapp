import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CustomerComponent} from './customer/customer.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ListcustomerComponent} from './listcustomer/listcustomer.component';
import {AddcustomerComponent} from './addcustomer/addcustomer.component';

const routes: Routes = [
  
  {
path:'login',
component:LoginComponent,
  },
  {
    path:'customer',
    component:CustomerComponent,
      },
  {
    path:'dashboard',
    component:DashboardComponent,
      },
      {
        path:'aboutus',
        component:AboutusComponent,
          },
     
      {
        path:'listcustomer',
        component:ListcustomerComponent,
          },
          {
            path:'addcustomer',
            component:AddcustomerComponent,
              },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 }

