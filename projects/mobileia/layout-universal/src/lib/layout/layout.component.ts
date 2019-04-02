import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mia-layout-universal',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Input() hasTopbar = true;
  @Input() designImgLogo = '';

  @Input() sidebarMenuAccount = [];
  @Input() sidebarMenu = [];
  @Input() sidebarHasSupportBox = true;

  constructor() { }

  ngOnInit() {
  }

}
