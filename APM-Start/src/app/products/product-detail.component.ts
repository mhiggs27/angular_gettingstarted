import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string;
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
