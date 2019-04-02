import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticationService, MIAUser } from '@mobileia/authentication';

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

  constructor(private authService: AuthenticationService) { }

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
}
