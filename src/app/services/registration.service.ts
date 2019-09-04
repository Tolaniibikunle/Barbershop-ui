import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const baseUrl = environment.api.baseUrl;
const registrationConfirm = environment.api.auth.registrationConfirm;
const resendVerificationToken = environment.api.auth.resendRegistrationToken;

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private _httpClient: HttpClient) { }

    public confirmRegistration(token: string): Promise<any> {
        let endpoint = registrationConfirm.replace("${token}", token)
        return this._httpClient.get(baseUrl + endpoint).toPromise();
    }

    public requestNewVerificationToken(token: string): Promise<any> {
        let endpoint = resendVerificationToken.replace("${token}", token);
        return this._httpClient.get(baseUrl + endpoint).toPromise();
    }

}