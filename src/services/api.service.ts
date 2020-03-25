import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV } from '../ENV';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {}

    public getMajorIndexes(): Observable<any> {
        return this.http.get(`${ENV.BASE_URL}majors-indexes`);
    }
}
