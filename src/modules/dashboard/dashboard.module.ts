import { NgModule } from '@angular/core';
// import { HeaderComponent } from './components/header.component/header.component';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard.page/dashboard.page';

@NgModule({
    declarations: [
        DashboardPage
    ],
    imports: [
        RouterModule.forChild([
            {path: '', component: DashboardPage}
        ])
    ],
    providers: [

    ],
    exports: [
    ]
})
export class DashboardModule {
}
