import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

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
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
