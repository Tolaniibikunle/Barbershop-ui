import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../bo/User';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const base = environment.api.baseUrl;
const login = environment.api.auth.login;

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private currentUser: User;

    constructor(private _http: HttpClient) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public get currentUserValue(): User {
        return this.currentUser;
    }

    login(email: string, password: string) {
        return this._http.post<any>(base + login, { email, password }).toPromise();
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

}