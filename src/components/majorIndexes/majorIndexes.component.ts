import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-major-indexes',
    templateUrl: './majorIndexes.component.html',
    styleUrls: ['./majorIndexes.component.scss']
})
export class MajorIndexesComponent implements OnInit {
    /**
     * Array with objects with major indexes from api
     */
    public majorIndexes: any[] = [];

    constructor(private apiService: ApiService) {}

    /**
     * Push major indexes in array majorIndexes
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
