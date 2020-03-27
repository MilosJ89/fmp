/**
 * Sidebar component
 * Component for navigation in application
 *
 * @author Milos Jovanovic
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    /**
     * Array with name of tabs and links
     */
    public tabs: any[] = [
        { tab: 'Home', link: 'home' },
        { tab: 'Companies', link: 'companies' },
        { tab: 'Crypto Currencies', link: 'cryptoCurrencies' },
        { tab: 'Currencies', link: 'currencies' },
        { tab: 'About', link: 'about' }
    ];
}
