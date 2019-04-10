import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { LayoutSidebarService } from '../services/layout-sidebar.service';

/*export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  headTitle?: string,
  badgeType?: string;
  badgeValue?: string;
  children?: Menu[];
}*/

@Component({
  selector: 'mia-layout-universal-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menuItems = [];

  constructor(private sidebarService: LayoutSidebarService) { }

  ngOnInit() {
    $.getScript('./assets/js/sidebar-menu.js');
  }

  public clickItemMenu(item): boolean{
    this.sidebarService.sidebarMenuObservable.next(item);
    return false;
  }
}
