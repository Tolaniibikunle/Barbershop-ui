import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';

// declare let L;
declare let tomtom: any;

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss']
})
export class AddressCardComponent implements OnInit {

  @ViewChild('map') mapElement: any;

  lat: number = 40.0056605;
  lng: number = -75.299176;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    var markerOptions = {
      icon: tomtom.L.icon({
        iconUrl: '/assets/img/electric-razor.png',
        iconSize: [30, 34],
        iconAnchor: [15, 34]
      })
    };
    const map = tomtom.L.map('map', {
      key: environment.mapsApiKey,
      basePath: '/assets/tomtomsdk',
      center: [this.lat, this.lng],
      zoom: this.zoom,
      source: 'vector'
    });
    tomtom.L.marker([this.lat, this.lng], markerOptions).addTo(map);
  }

}
