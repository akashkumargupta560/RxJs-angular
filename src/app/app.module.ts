import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { HomeModule } from './pages/home/home.module';
import { ProfileModule } from './pages/profile/profile.module';
import { NavbarComponent } from './cores/navbar/navbar.component';
import { CoresModule } from './cores/cores.module';
import { ObservableModule } from './pages/observable/observable.module';
import { PromiseModule } from './pages/promise/promise.module';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //SharedModule,
    DashboardModule,
    HomeModule,
    ProfileModule,
    ObservableModule,
    PromiseModule,
    CoresModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
