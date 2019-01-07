import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items;
  constructor(public http: Http, private router: Router) { }

  ngOnInit() {
      this.http.get('http://5a12745f748faa001280a746.mockapi.io/v1/stores/item').map((response) => {
          this.items = response.json()
      }).toPromise();
  }

  goToProductDetails(id) {
    this.router.navigate(['/products', id]);
  }

}
