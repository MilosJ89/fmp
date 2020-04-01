/**
 * Crypto Currencies Page
 *
 * Display information of crypto currencies
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
    selector: 'app-crypto-currencies-page',
    templateUrl: './cryptoCurrencies.page.html',
    styleUrls: ['./cryptoCurrencies.page.scss']
})
export class CryptoCurrenciesPage implements OnInit {
    public cryptoCurrencies: any[] = [];
    /**
     * Array for header of crypto currencies with fields and titles
     */
    public fieldsCryptoCurrencies = [
        { field: 'ticker', title: 'Ticker'},
        { field: 'name', title: 'Name'},
        { field: 'price', title: 'Price'},
        { field: 'changes', title: 'Changes'}
    ];

    constructor(private apiService: ApiService) {}

    /**
     * Angular life cycle hook
     * Initialzie crypto currencies
     */
    public ngOnInit() {
        this.apiService.getCryptoCurrencies()
            .subscribe(
                cryptoCurrency => {
                    this.cryptoCurrencies = cryptoCurrency.cryptocurrenciesList;
            },
                error => {
                    console.log('error');
                }
            );
    }
}
