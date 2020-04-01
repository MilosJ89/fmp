/**
 * Table componnet
 *
 * This component create table for input datas from api
 *
 * @author Milos Jovanovic
 */
import { Component, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    /**
     * Array for title of header tables
     */
    @Input() public fields: any[];

    /**
     * Array of objects from components for table
     */
    @Input() public items: any[];
}
