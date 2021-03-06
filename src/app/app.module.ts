import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register-login/register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './register-login/login/login.component';
import { NavbarComponent } from './shared/navbar-footer/navbar/navbar.component';
import { FooterComponent } from './shared/navbar-footer/footer/footer.component';
import { RegisterCompanyComponent } from './register-login/register-company/register-company.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegisterCompanyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
