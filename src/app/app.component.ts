import { Component } from '@angular/core';
import { MDL } from './util/MaterialDesignLiteUpgradeElement';
import { User } from './bo/User';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  currentYear = new Date().getFullYear();
  user: User = this._authenticationService.currentUserValue;

  routes: Route[] = [
    {
      link: "/dashboard",
      name: "Dashboard"
    },
    {
      link: "/services",
      name: "Services",
    },
    {
      link: "/appointments",
      name: "Appointment"
    },
    {
      link: "/blog",
      name: "Blog",
    },
    {
      link: "/about-us",
      name: "About Us"
    },
    {
      link: "/contact-us",
      name: "Contact Us"
    }
  ]

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router) { }

  goToLogin() {
    this._router.navigate(['login']);
  }

  logout() {
    this._authenticationService.logout();
    window.location.reload();
  }


}

export interface Route {
  link: string;
  name: string;
}
