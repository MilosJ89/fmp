/**
 * Companies page
 * Display information of companies
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { TableComponent } from 'src/modules/table/components/table-component/table.component';

@Component({
    selector: 'app-companies-page',
    templateUrl: './companies.page.html',
    styleUrls: ['./companies.page.scss']
})
export class CompaniesPage implements OnInit {
    // @ViewChild('cell', {static: false}) cell: ElementRef;

    public fieldsCompanies = [
        {field: 'image', title: ''},
        {field: 'companyName', title: 'Company'},
        {field: 'price', title: 'Price'},
        {field: 'changes', title: 'Changes'},
        {field: 'changesPercentage', title: 'Changes%'},
        {field: 'website', title: 'Website'}
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

    constructor(
        private apiService: ApiService,
        private renderer2: Renderer2
        ) {}


    public ngOnInit() {
        for (const symbol of this.symbols) {
            this.apiService.getCompany(symbol).subscribe(company => {
                this.companies.push(company.profile);
            });
        }

        console.log(this.companies);
    }

}

