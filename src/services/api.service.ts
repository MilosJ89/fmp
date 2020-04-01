/**
 * ApiService service
 *
 * Contains methods for fetching data from server
 *
 * @author Milos Jovanovic
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV } from '../ENV';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    /**
     * Return major indexes from api
     * @returns {Observable<object>}
     */
    public getMajorIndexes(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}majors-indexes`);
    }

    /**
     *
     * @param {string} symbol
     *
     * Return companies from api
     * @returns {Observable<object>}
     */
    public getCompany(symbol: string): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}company/profile/${symbol}`);
    }

    /**
     * Return crypto currencies
     * @returns {Observable<object>}
     */
    public getCryptoCurrencies(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}cryptocurrencies`);
    }

    /**
     * Return currencies
     * @returns {Observable<object>}
     */
    public getCurrencies(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL_CURRENCIES}eur`);
    }
}
