import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { PhotoCarouselComponent } from './components/photo-carousel/photo-carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicesComponent } from './components/screens/services/services.component';
import { AppointmentComponent } from './components/screens/appointment/appointment.component';
import { BlogComponent } from './components/screens/blog/blog.component';
import { AboutUsComponent } from './components/screens/about-us/about-us.component';
import { ContactUsComponent } from './components/screens/contact-us/contact-us.component';
import { DashboardComponent } from './components/screens/dashboard/dashboard.component';
import { MDL } from './util/MaterialDesignLiteUpgradeElement';
import { QuickAppointmentComponent } from './components/quick-appointment/quick-appointment.component';
import { QACardComponent } from './components/quick-appointment/qacard/qacard.component';
import { ContactUsCardComponent } from './components/contact-us-card/contact-us-card.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { RegistrationConfirmationComponent } from './components/screens/registration-confirmation/registration-confirmation.component';
import { LoginScreenComponent } from './components/screens/login-screen/login-screen.component';
import { LoginCardComponent } from './components/screens/login-screen/components/login-card/login-card.component';
import { ForgotPasswordCardComponent } from './components/screens/login-screen/components/forgot-password-card/forgot-password-card.component';
import { SignUpCardComponent } from './components/screens/login-screen/components/sign-up-card/sign-up-card.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NewsCardComponent,
    PhotoCarouselComponent,
    ServicesComponent,
    AppointmentComponent,
    BlogComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    MDL,
    QuickAppointmentComponent,
    QACardComponent,
    ContactUsCardComponent,
    AddressCardComponent,
    RegistrationConfirmationComponent,
    LoginScreenComponent,
    LoginCardComponent,
    ForgotPasswordCardComponent,
    SignUpCardComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
