import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardPage } from 'src/modules/dashboard/pages/dashboard.page/dashboard.page';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
