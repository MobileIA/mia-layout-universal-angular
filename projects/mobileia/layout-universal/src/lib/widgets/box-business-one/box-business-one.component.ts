import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mia-layout-universal-box-business-one',
  templateUrl: './box-business-one.component.html',
  styleUrls: ['./box-business-one.component.css']
})
export class BoxBusinessOneComponent implements OnInit {

  @Input() title = '';
  @Input() classIcon = 'icofont-growth font-info';
  @Input() totalNumber = 0;

  constructor() { }

  ngOnInit() {
  }

}
