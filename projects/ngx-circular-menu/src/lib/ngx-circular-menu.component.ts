import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItemsModel } from './menu-items.model';

@Component({
  selector: 'lib-ngx-circular-menu',
  template: `
  <div id="radial-menu" class="radial-menu bottom-sticky">

  <a class="floating-btn" onclick="document.getElementById('radial-menu').classList.toggle('active');">
    <i class="fa fa-plus"></i>
  </a>

  <menu class="items-wrapper four-menu">
    <a href="javascript:void(0)" class="fab-menu-item" (click)="onMenuItemOneClick()">
      <img class="navbar-img-link" src="{{menuItemsModelData.menuOneIcon}}" alt="Menu item" />
      <span>{{menuItemsModelData.menuOneLabel}}</span>
    </a>
    <a href="javascript:void(0)" class="fab-menu-item" (click)="onMenuItemTwoClick()">
      <img class="navbar-img-link" src="{{menuItemsModelData.menuTwoIcon}}" alt="Menu item" />
      <span>{{menuItemsModelData.menuTwoLabel}}</span>
    </a>
    <a href="javascript:void(0)" class="fab-menu-item" (click)="onMenuItemThreeClick()">
      <img class="navbar-img-link" src="{{menuItemsModelData.menuThreeIcon}}" alt="Menu item" />
      <span>{{menuItemsModelData.menuThreeLabel}}</span>
    </a>
    <a href="javascript:void(0)" class="fab-menu-item" (click)="onMenuItemFourClick()">
      <img class="navbar-img-link" src="{{menuItemsModelData.menuFourIcon}}" alt="Menu item" />
      <span>{{menuItemsModelData.menuFourLabel}}</span>
    </a>
  </menu>

  </div>
  `,
  styleUrls: ['./font-awesome-4-7-7.min.css'],
})
export class NgxCircularMenuComponent implements OnInit {

  @Input() menuItemsModelData: MenuItemsModel;
  @Output() menuItemOneClick = new EventEmitter<boolean>();
  @Output() menuItemTwoClick = new EventEmitter<boolean>();
  @Output() menuItemThreeClick = new EventEmitter<boolean>();
  @Output() menuItemFourClick = new EventEmitter<boolean>();
  menuItemsModel: MenuItemsModel;

  constructor() { }

  ngOnInit() {
    this.menuItemsModel = this.menuItemsModelData;
  }
  onMenuItemOneClick() {
    this.menuItemOneClick.emit(true);
  }
  onMenuItemTwoClick() {
    this.menuItemTwoClick.emit(true);
  }
  onMenuItemThreeClick(){
    this.menuItemThreeClick.emit(true);
  }
  onMenuItemFourClick(){
    this.menuItemFourClick.emit(true);
  }

}
