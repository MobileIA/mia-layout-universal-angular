import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutUniversalModule } from 'projects/mobileia/layout-universal/src/public_api';
import { SystemComponent } from './pages/system/system.component';
import { AuthenticationModule } from '@mobileia/authentication';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule.forRoot({ apiKey: '23' }),
    LayoutUniversalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
