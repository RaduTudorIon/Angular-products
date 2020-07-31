import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IProduct } from './product'
import { Route } from '@angular/compiler/src/core';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2019',
      'description': 'Leaf rake with 48 inch wooden handel',
      'price': 19.99,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
