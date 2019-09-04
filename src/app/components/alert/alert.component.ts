import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  message: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  subscribeToAlerts() {
  }

}
