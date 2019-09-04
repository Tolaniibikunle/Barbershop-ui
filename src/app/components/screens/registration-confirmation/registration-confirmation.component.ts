import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../../../services/registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User, UserSerializer } from '../../../bo/User';

@Component({
  selector: 'app-registration-confirmation',
  templateUrl: './registration-confirmation.component.html',
  styleUrls: ['./registration-confirmation.component.scss']
})
export class RegistrationConfirmationComponent implements OnInit {

  token: string;
  registered?: boolean;
  error?: string;
  newTokenRequest: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _registrationService: RegistrationService
  ) { }

  ngOnInit() {
    this.confirmRegistration();
  }

  confirmRegistration() {
    this.token = this._route.snapshot.paramMap.get('token');
    this._registrationService.confirmRegistration(this.token)
      .then(data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.registered = true;
      })
      .catch((err: HttpErrorResponse) => {
        this.error = err.error;
      });
  }

  returnToDashboard() {
    this._router.navigate(['/dashboard']);
  }

  requestNewToken() {
    this._registrationService.requestNewVerificationToken(this.token)
      .then(() => {
        this.newTokenRequest = true;
      }).catch((err: HttpErrorResponse) => {
        this.error = err.error;
      });
  }

  requestHelp() {
    console.log("Help Requested");
  }

}

