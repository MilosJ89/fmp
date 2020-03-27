import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { MajorIndexesComponent } from 'src/components/majorIndexes/majorIndexes.component';
import { HomePage } from 'src/pages/home/home.page';
import { CompaniesPage } from 'src/pages/companies/companies.page';
import { CryptoCurrenciesPage } from 'src/pages/cryptoCurrencies/cryptoCurrencies.page';
import { CurrenciesPage } from 'src/pages/currencies/currencies.page';
import { AboutPage } from 'src/pages/about/about.page';

// Modules
import { ApiService } from 'src/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'src/modules/table/table.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MajorIndexesComponent,
    HomePage,
    CompaniesPage,
    CryptoCurrenciesPage,
    CurrenciesPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
