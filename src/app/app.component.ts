import { Component } from '@angular/core';
import { MDL } from './util/MaterialDesignLiteUpgradeElement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

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

  title = 'barbershop-ui';
}

export interface Route {
  link: string;
  name: string;
}
