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
    public fieldsCompanies = [
        {field: '.profile.image', title: ''},
        {field: '.profile.companyName', title: 'Company'},
        {field: '.profile.price', title: 'Price'},
        {field: '.profile.changes', title: 'Changes'},
        {field: '.profile.changesPercentage', title: 'Changes%'},
        {field: '.profile.website', title: 'Website'}
        ];

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
    public companies = [];

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        for (const symbol of this.symbols) {
            this.apiService.getCompany(symbol).subscribe(company => {
                this.companies.push(company);
            });
        }
        console.log(this.companies);
    }
}

