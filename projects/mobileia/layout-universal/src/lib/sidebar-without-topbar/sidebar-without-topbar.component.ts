import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';
import { LayoutSidebarService } from '../services/layout-sidebar.service';

@Component({
  selector: 'mia-layout-universal-sidebar-without-topbar',
  templateUrl: './sidebar-without-topbar.component.html',
  styleUrls: ['./sidebar-without-topbar.component.css']
})
export class SidebarWithoutTopbarComponent implements OnInit {

  @Input() designImgLogo = '';
  @Input() designHasSupportBox = true;

  public currentUser: MIAUser = new MIAUser();

  @Input() menuUserItems = [];
  @Input() menuItems = [];

  @Input() helpBoxTitle = 'Need Help';
  @Input() helpBoxPhone = '+1 234 567 899';
  @Input() helpBoxEmail = 'help@mobileia.com';

  constructor(
    private authService: AuthenticationService,
    private sidebarService: LayoutSidebarService) { }

  ngOnInit() {
    // Cargar JS para el menu
    $.getScript('./assets/js/sidebar-menu.js');
    // Cargar usuario logueado
    this.loadAccount();
  }
  /**
   * Cargar usuario logueado
   */
  protected loadAccount(): void {
    this.authService.getCurrentUser().subscribe(data => {
      if (data == null) {
        return;
      }
      this.currentUser = data;
    });
  }

  public clickItemMenu(item): boolean{
    this.sidebarService.sidebarMenuObservable.next(item);
    return false;
  }
}
