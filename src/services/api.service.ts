import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV } from '../ENV';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    /**
     * Get major indexes from api
     */
    public getMajorIndexes(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}majors-indexes`);
    }

    /**
     *
     * @param {string} symbol
     *
     * Get companies from api
     */
    public getCompany(symbol: string): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}company/profile/${symbol}`);
    }

    /**
     * Get crypto currencies
     */
    public getCryptoCurrencies(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}cryptocurrencies`);
    }

    /**
     * Get currencies
     */
    public getCurrencies(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL_CURRENCIES}eur`);
    }
}
