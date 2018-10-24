import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent } from './components/screens/contact-us/contact-us.component';
import { ServicesComponent } from './components/screens/services/services.component';
import { AppointmentComponent } from './components/screens/appointment/appointment.component';
import { BlogComponent } from './components/screens/blog/blog.component';
import { AboutUsComponent } from './components/screens/about-us/about-us.component';
import { DashboardComponent } from './components/screens/dashboard/dashboard.component';

const routes: Routes =[
  {path: 'dashboard', component: DashboardComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'appointments', component: AppointmentComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
