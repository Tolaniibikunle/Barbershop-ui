import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../../services/authentication.service';
import { User, UserSerializer } from '../../../../../bo/User';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  host: {
    class: 'center-card'
  }
})
export class LoginCardComponent implements OnInit {

  public loginForm: FormGroup;
  public submitAttempt: boolean = false;
  errorMsg: string;

  constructor(
    public formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router) {
    this.loginForm = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    this.errorMsg = null;
    let serializer = new UserSerializer();
    this._authenticationService.login(this.loginForm.get('email').value, this.loginForm.get('password').value).then(data => {
      let user = serializer.fromJson(data);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this._router.navigate(['/dashboard']);
    }).catch((err: HttpErrorResponse) => {
      this.generateErrorMsg(err.error.error);
    });
  }

  generateErrorMsg(error: string) {
    switch (error) {
      case 'Not Found':
        this.errorMsg = "Account Not Found! Try signing up"
        break;
      default:
        this.errorMsg = "Having issues signing you in. Please try again in a couple minutes"
        break;
    }
  }

}
