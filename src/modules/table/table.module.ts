import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './components/table-component/table.component';

@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        TableComponent
    ]
})
export class TableModule { }
