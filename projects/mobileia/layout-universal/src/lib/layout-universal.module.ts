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

@NgModule({
  declarations: [LayoutUniversalComponent, LayoutComponent, HeaderComponent, SidebarComponent, LoginComponent, SidebarWithoutTopbarComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [LayoutComponent, LoginComponent]
})
export class LayoutUniversalModule { }
