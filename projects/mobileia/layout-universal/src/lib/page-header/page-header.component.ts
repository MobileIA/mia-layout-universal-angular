import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mia-layout-universal-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() title = '';
  @Input() caption = '';
  @Input() breadcrumb = [];

  constructor() { }

  ngOnInit() {
  }

}
