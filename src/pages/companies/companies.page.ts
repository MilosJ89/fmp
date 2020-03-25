/**
 * Companies page
 * Display information of companies
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-companies-page',
    templateUrl: './companies.page.html',
    styleUrls: ['./companies.page.scss']
})
// tslint:disable-next-line: component-class-suffix
export class CompaniesPage implements OnInit {
    public fieldsCompanies = ['Company', 'Price', 'Changes', 'Changes%', 'Website'];

    constructor(private apiService: ApiService) {}

    ngOnInit() {}
}

