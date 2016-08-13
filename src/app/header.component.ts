import { Component, OnInit } from '@angular/core';
import {Dropdown} from "./dropdown.directive";

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [Dropdown]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
