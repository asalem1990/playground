import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  items_count;
  all_items_count;

  cartDetails:any = [];
  constructor(public http: Http) {
    this.items = eval(window.localStorage.getItem("cart_items"));

    this.items_count = JSON.parse(window.localStorage.getItem("cart_items_quantity_added"));
    this.all_items_count = window.localStorage.getItem("cart_items_total_quantity_added");

    this.getItems();
  }

  ngOnInit() {}

  getItems () {
    this.http.get('http://5a12745f748faa001280a746.mockapi.io/v1/stores/item/').map((response) => {
      response.json().filter(el => {
        if(this.items.includes(el.id)) {
          this.cartDetails.push(el);
        }
      });
    }).toPromise();
  }

  reduceQuant(id) {
    this.items_count[id]--;
    this.all_items_count--;
    if (this.items_count[id] < 1) {
      this.items.splice(this.items.indexOf(id),1);
      this.cartDetails.filter(el => {
        if (el.id == id) {
          this.cartDetails.splice(this.cartDetails.indexOf(el), 1);
        }
      });
    }
    window.localStorage.setItem("cart_items", JSON.stringify(this.items));
    window.localStorage.setItem("cart_items_quantity_added", JSON.stringify(this.items_count));
    window.localStorage.setItem("cart_items_total_quantity_added", JSON.stringify(this.all_items_count));
    let nav = new NavComponent();
    nav.updateCart();
  }

  increaseQuant(id) {
    this.items_count[id]++;
    this.all_items_count++;
    window.localStorage.setItem("cart_items_quantity_added", JSON.stringify(this.items_count));
    window.localStorage.setItem("cart_items_total_quantity_added", JSON.stringify(this.all_items_count));
    let nav = new NavComponent();
    nav.updateCart();
  }
}
