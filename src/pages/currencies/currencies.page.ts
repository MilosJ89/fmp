import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
    selector: 'app-currencies-page',
    templateUrl: './currencies.page.html',
    styleUrls: ['./currencies.page.scss']
})
export class CurrenciesPage implements OnInit {
    /**
     * Array abbreviation of currencies
     */
    public symbols: string[] = ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'CAD', 'AUD', 'RUB', 'CNY', 'SEK', 'AED', 'INR', 'EGP', 'NOK'];

    /**
     * Array of object with currencies
     */
    public currencies: any[];

    /**
     * Array for header of companies table with fileds and titles
     */
    public fieldCurrencies = [
        {field: 'country', title: 'Country'},
        {field: 'currency', title: 'Currency'},
        {field: 'exchange', title: 'Exchange'}
    ];

    constructor(private apiService: ApiService) {}

    /**
     *
     */
    public ngOnInit() {
        for (const symbol of this.symbols) {
            this.apiService.getCurrencies().subscribe(currency => {
                console.log(currency.rates[symbol]);
            });
        }
    }
}
