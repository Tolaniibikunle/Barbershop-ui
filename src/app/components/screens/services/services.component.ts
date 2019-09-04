import { Component, OnInit } from '@angular/core';
import { ServiceSerializer, Service } from '../../../bo/Service';
import { BarberServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Array<Service> = new Array();

  constructor(private _barberServicesOffered: BarberServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    let serializer = new ServiceSerializer();
    this._barberServicesOffered.getAllServices().then((data) => {
      data.forEach(element => {
        this.services.push(serializer.fromJson(element));
      });
    }).then(() => {
      console.log(this.services)
    });
  }

}
