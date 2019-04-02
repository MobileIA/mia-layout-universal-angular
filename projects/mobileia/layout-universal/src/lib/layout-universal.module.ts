import { NgModule } from '@angular/core';
import { LayoutUniversalComponent } from './layout-universal.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarWithoutTopbarComponent } from './sidebar-without-topbar/sidebar-without-topbar.component';
import { BoxBusinessOneComponent } from './widgets/box-business-one/box-business-one.component';
import { CountUpModule } from 'countup.js-angular2';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [LayoutUniversalComponent, LayoutComponent, HeaderComponent, SidebarComponent, LoginComponent, SidebarWithoutTopbarComponent, BoxBusinessOneComponent, PageHeaderComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountUpModule
  ],
  exports: [LayoutComponent, LoginComponent, LayoutComponent, BoxBusinessOneComponent, PageHeaderComponent]
})
export class LayoutUniversalModule { }
