import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@NgModule({
    declarations: [

    ],
    imports: [
        HttpClientModule
        // RouterModule.forChild([
        //     {path: '', component: DashboardPage}
        // ])
    ],
    providers: [
        ApiService
    ],
    exports: [
    ]
})
export class DashboardModule {
}
