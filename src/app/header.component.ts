import { Component, OnInit } from '@angular/core';
import {Dropdown} from "./dropdown.directive";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  selector: 'rb-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [Dropdown, ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
