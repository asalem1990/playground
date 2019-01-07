import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cart_items_total_quantity_added:any = 0;
  constructor() {
    this.cart_items_total_quantity_added = window.localStorage.getItem("cart_items_total_quantity_added");
    if (!this.cart_items_total_quantity_added) {
      this.cart_items_total_quantity_added = 0;
    }
  }

  ngOnInit() {
  }

  updateCart() {
    this.cart_items_total_quantity_added = window.localStorage.getItem("cart_items_total_quantity_added");
    if (!this.cart_items_total_quantity_added) {
      this.cart_items_total_quantity_added = 0;
    }
  }

  getCart() {
    this.cart_items_total_quantity_added = window.localStorage.getItem("cart_items_total_quantity_added");
    if (!this.cart_items_total_quantity_added) {
      this.cart_items_total_quantity_added = 0;
    }
    return this.cart_items_total_quantity_added;
  }

}
