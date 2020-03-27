/**
 * Companies page
 * Display information of companies
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-companies-page',
    templateUrl: './companies.page.html',
    styleUrls: ['./companies.page.scss']
})
export class CompaniesPage implements OnInit {
    @ViewChild('cell', {static: false}) cell: ElementRef;

    /**
     * Array for header of companies table with fileds and titles
     */
    public fieldsCompanies = [
        {field: 'image', title: ''},
        {field: 'companyName', title: 'Company'},
        {field: 'price', title: 'Price'},
        {field: 'changes', title: 'Changes'},
        {field: 'changesPercentage', title: 'Changes%'},
        {field: 'website', title: 'Website'}
        ];

    /**
     * Array with symbols of companies which using for endpoint in url
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
     * Array for companies from api
     */
    public companies: any[] = [];

    constructor(
        private apiService: ApiService,
        private renderer2: Renderer2
        ) {}

    // public organizeTable() {
    //     this.companies.map((company) => {
    //         return company.profile.changes.toFixed(2);
    //     });
    // }

    /**
     * Push array companies with objects of company informations
     */
    public ngOnInit() {
        for (const symbol of this.symbols) {
            this.apiService.getCompany(symbol)
                .subscribe(
                    company => {
                        this.companies.push(company.profile);
                    },
                    error => {
                        console.log('error');
                    }
                );
        }
    }

}

