import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private id;
  item;
  constructor(public http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.http.get('http://5a12745f748faa001280a746.mockapi.io/v1/stores/item/'+this.id).map((response) => {
          this.item = response.json();
      }).toPromise();
    });
  }

  addToCart(id) {
    let cart_items:any = eval(window.localStorage.getItem("cart_items"));
    let cart_items_quantity_added:any = window.localStorage.getItem("cart_items_quantity_added");
    let cart_items_total_quantity_added:any = window.localStorage.getItem("cart_items_total_quantity_added");
    if (!cart_items) {
      cart_items = [];
      cart_items_quantity_added = {};
      cart_items_total_quantity_added = 0;
      window.localStorage.setItem("cart_items", cart_items);
      window.localStorage.setItem("cart_items_quantity_added", cart_items_quantity_added);
      window.localStorage.setItem("cart_items_total_quantity_added", cart_items_total_quantity_added);
    }
    if (cart_items.includes(id)) {
      console.log("existing item: " + id);
      let _cart_items_quantity_added = JSON.parse(cart_items_quantity_added);
      _cart_items_quantity_added[id] = Number(_cart_items_quantity_added[id]) + 1;
      cart_items_total_quantity_added = Number(cart_items_total_quantity_added) + 1;
      window.localStorage.setItem("cart_items_quantity_added", JSON.stringify(_cart_items_quantity_added));
      window.localStorage.setItem("cart_items_total_quantity_added", JSON.stringify(cart_items_total_quantity_added));
    } else {
      console.log("new item: " + id);
      cart_items[cart_items.length] = id;
      let _cart_items_quantity_added = JSON.parse(cart_items_quantity_added);
      _cart_items_quantity_added[id] = 1;
      cart_items_total_quantity_added++;
      window.localStorage.setItem("cart_items", JSON.stringify(cart_items));
      window.localStorage.setItem("cart_items_quantity_added", JSON.stringify(_cart_items_quantity_added));
      window.localStorage.setItem("cart_items_total_quantity_added", JSON.stringify(cart_items_total_quantity_added));
    }

    let nav = new NavComponent();
    nav.updateCart();
  }


}
