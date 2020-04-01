/**
 * Companies page
 *
 * Display information of companies
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-companies-page',
    templateUrl: './companies.page.html',
    styleUrls: ['./companies.page.scss']
})
export class CompaniesPage implements OnInit {
    // @ViewChild('table', {static: false}) table: ElementRef[];

    /**
     * Header of companies table with fileds and titles
     */
    public fieldsCompanies = [
        {field: 'image', title: ''},
        {field: 'companyName', title: 'Company', class: 'bold'},
        {field: 'price', title: 'Price'},
        {field: 'changes', title: 'Changes'},
        {field: 'changesPercentage', title: 'Changes%'},
        {field: 'website', title: 'Website'}
        ];

    /**
     * Symbols of companies which using for endpoint in url
     */
    public symbols: string[] = [
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

    /**
     * Companies from api
     */
    public companies: any[] = [];

    constructor(
        private apiService: ApiService,
        private reneder2: Renderer2,
        private table: ElementRef
        ) {}

    /**
     * Angular life cycle hook
     * Initialize companies
     */
    public ngOnInit() {
        for (const symbol of this.symbols) {
            this.apiService.getCompany(symbol)
                .subscribe(
                    company => {
                        company.profile.changesPercentage = company.profile.changesPercentage.replace(/[()]/g, '');
                        company.profile.website = company.profile.website.replace('http://', '');
                        this.companies.push(company.profile);
                        console.log(this.companies);
                    },
                    error => {
                        console.log('error');
                    }
                );
        }
    }
}

