import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from '../components/header-component/header.component';
import { SidebarComponent } from 'src/components/sidebar-component/sidebar.component';
import { MajorIndexesComponent } from 'src/components/majorIndexes-component/majorIndexes.component';

// Modules
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { ApiService } from 'src/services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MajorIndexesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
