import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV } from '../ENV';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    public symbols = [
        'spy',
        't',
        'kmi',
        'intc',
        'mu',
        'gdx',
        'ge',
        'seb',
        'eem',
        'ghc',
        'aapl',
        'msft',
        'siri',
        'hpq',
        'cx',
        'efa',
        'amd',
        'snap',
        'fb',
        'orcl'];

    constructor(private http: HttpClient) {}

    public getMajorIndexes(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}majors-indexes`);
    }

    public getCompanies(): Observable<any> {
        for (const symbol of this.symbols) {
            return this.http.get(`${ENV.BASE_URL}company/profile/${symbol}`);
        }
    }
}
