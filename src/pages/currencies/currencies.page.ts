/**
 * Currencies Page
 *
 * Dsiplay information for currencies
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
    selector: 'app-currencies-page',
    templateUrl: './currencies.page.html',
    styleUrls: ['./currencies.page.scss']
})
export class CurrenciesPage implements OnInit {
    /**
     * Abbreviation of currencies
     */
    public symbols: string[] = ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'RUB', 'CNY', 'SEK', 'AED', 'INR', 'EGP', 'NOK'];

    /**
     * Currencies
     */
    public currencies: any[];

    /**
     * Header of companies table with fileds and titles
     */
    public fieldCurrencies = [
        {field: 'country', title: 'Country'},
        {field: 'currency', title: 'Currency'},
        {field: 'exchange', title: 'Exchange'}
    ];

    constructor(private apiService: ApiService) {}

    /**
     * Angular life cycle hook
     * Initialize currencies
     */
    public ngOnInit() {
        for (const symbol of this.symbols) {
            this.apiService.getCurrencies().subscribe(currency => {
                console.log(currency.rates[symbol]);
            });
        }
    }
}
