import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public url = 'http://localhost:3000/v1';

    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = localStorage.getItem('petshop.token');
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers;
    }

    authenticate(data) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken() {
        return this.http.post(
            `${this.url}/accounts/refresh-token`,
            null,
            { headers: this.composeHeaders() }
        );
    }

    create(data) {
        return this.http.post(`${this.url}/accounts`, data);
    }

    resetPassword(data) {
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }
}