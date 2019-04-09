import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-card',
  templateUrl: './contact-us-card.component.html',
  styleUrls: ['./contact-us-card.component.scss']
})
export class ContactUsCardComponent implements OnInit {

  masks: any;

  firstName: any = "";
  lastName: any = "";
  email: any = "";
  phoneNumber: any = "";
  comments: any = "";

  constructor() {
    this.masks = {
      phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    };

  }

  ngOnInit() {
  }

  save() {
    let unmaskedData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber.replace(/\D+/g, ''),
      comments: this.comments
    };
    console.log(unmaskedData);
  }

}
