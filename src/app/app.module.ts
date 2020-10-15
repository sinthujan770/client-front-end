
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ClientComponent } from './component/client/client.component';
import { LoginComponent } from './component/login/login.component';
import { ClientDetailsComponent } from './component/client-details/client-details.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { RegisterComponent } from './component/register/register.component';
import { SettingsComponent } from './component/settings/settings.component';
// services//
import { ClientService } from './services/client.service';
import { AddClientComponent } from './component/add-client/add-client.component';
import {ReactiveFormsModule} from '@angular/forms';

// 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule,MatFormFieldControl, MatLabel, MatHint} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    LoginComponent,
    ClientDetailsComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SideBarComponent,
    SettingsComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
