import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const base = environment.api.baseUrl;
const getAllList = environment.api.services.listAll;

@Injectable({
    providedIn: 'root'
})
export class BarberServiceService {
    constructor(private _httpClient: HttpClient) {
    }

    getAllServices(): Promise<any> {
        return this._httpClient.get(base + getAllList).toPromise();
    }
}