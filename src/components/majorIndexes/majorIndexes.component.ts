/**
 * Major Indexes component
 *
 * Show major indexes and theirs values at ticker below header
 */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-major-indexes',
    templateUrl: './majorIndexes.component.html',
    styleUrls: ['./majorIndexes.component.scss']
})
export class MajorIndexesComponent implements OnInit {
    /**
     * Major indexes from api
     */
    public majorIndexes: any[] = [];

    constructor(private apiService: ApiService) {}

    /**
     * Angular life cycle hook
     * Initializes major indexes
     */
    public ngOnInit() {
        this.apiService.getMajorIndexes()
            .subscribe(
                index => {
                    this.majorIndexes = index.majorIndexesList;
                },
                error => {
                    console.log('error');
                }
            );
    }
}
