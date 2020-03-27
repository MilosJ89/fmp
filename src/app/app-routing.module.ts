import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaniesPage } from 'src/pages/companies/companies.page';
import { HomePage } from 'src/pages/home/home.page';
import { CryptoCurrenciesPage } from 'src/pages/cryptoCurrencies/cryptoCurrencies.page';
import { CurrenciesPage } from 'src/pages/currencies/currencies.page';
import { AboutPage } from 'src/pages/about/about.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'companies', component: CompaniesPage },
  { path: 'cryptoCurrencies', component: CryptoCurrenciesPage },
  { path: 'currencies', component: CurrenciesPage },
  { path: 'about', component: AboutPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
