/**
 * Header component
 *
 * Display header at application
 *
 * @author Milos Jovanovic
 */
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    /**
     * Show time
     */
    public currentTime: any;

    /**
     * Show date
     */
    public todayDate: any;

    /**
     * Initialize time and date
     */
    public ngOnInit() {
        this.currentTime = setInterval(() => {
            this.currentTime = new Date();
        }, 1000);

        this.todayDate = new Date();
    }

    /**
     * Clear interval from memory
     */
    public ngOnDestroy() {
        if (this.currentTime) {
            clearInterval(this.currentTime);
        }
    }
}
