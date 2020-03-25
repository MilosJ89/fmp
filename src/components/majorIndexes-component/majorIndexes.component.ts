import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-major-indexes',
    templateUrl: './majorIndexes.component.html',
    styleUrls: ['./majorIndexes.component.scss']
})
export class MajorIndexesComponent implements OnInit {
    public majorIndexes = [];

    constructor(private apiService: ApiService) {}

    public ngOnInit() {
        this.apiService.getMajorIndexes().subscribe(index => {
            this.majorIndexes = index.majorIndexesList;
        });
    }
}
