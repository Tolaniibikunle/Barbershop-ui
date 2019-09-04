import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/screens/contact-us/contact-us.component';
import { ServicesComponent } from './components/screens/services/services.component';
import { AppointmentComponent } from './components/screens/appointment/appointment.component';
import { BlogComponent } from './components/screens/blog/blog.component';
import { AboutUsComponent } from './components/screens/about-us/about-us.component';
import { DashboardComponent } from './components/screens/dashboard/dashboard.component';
import { RegistrationConfirmationComponent } from './components/screens/registration-confirmation/registration-confirmation.component';
import { LoginScreenComponent } from './components/screens/login-screen/login-screen.component';
import { LoginCardComponent } from './components/screens/login-screen/components/login-card/login-card.component';
import { SignUpCardComponent } from './components/screens/login-screen/components/sign-up-card/sign-up-card.component';
import { ForgotPasswordCardComponent } from './components/screens/login-screen/components/forgot-password-card/forgot-password-card.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'registrationConfirm/:token', component: RegistrationConfirmationComponent },
  {
    path: 'login', component: LoginScreenComponent, children: [
      { path: '', component: LoginCardComponent },
      { path: 'forgot-password', component: ForgotPasswordCardComponent },
      { path: 'sign-up', component: SignUpCardComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
