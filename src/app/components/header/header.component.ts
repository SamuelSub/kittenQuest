import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openMenu', [
      state('show', style({
        transform: 'translateX(-100vw)',
      })),
      state('hide', style({
        transform: 'translateX(0)',
      })),
      transition('hide => show', animate('0.3s ease-in-out')),
      transition('show => hide', animate('0.3s ease-in-out')),
    ])
  ]
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  get stateName() {
    return this.showMenu ? 'hide' : 'show'
  }

  toggleMenu() {
    this.showMenu = !this.showMenu
  }

}
