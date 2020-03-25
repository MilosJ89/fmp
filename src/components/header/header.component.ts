/**
 * Header component
 * Display header at application
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public currentTime: any;
    public todayDate: any;

    /**
     * Function for time
     */
    public ngOnInit() {
        setInterval(() => {
            this.currentTime = new Date();
        }, 1000);
        this.todayDate = new Date();
    }
}
