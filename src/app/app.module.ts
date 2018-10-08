import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
