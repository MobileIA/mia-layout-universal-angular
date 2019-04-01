import { NgModule } from '@angular/core';
import { LayoutUniversalComponent } from './layout-universal.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LayoutUniversalComponent, LayoutComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutUniversalModule { }
