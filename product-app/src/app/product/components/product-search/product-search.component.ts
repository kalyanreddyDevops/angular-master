import { Component, OnInit } from '@angular/core';

import {FormBuilder,
        FormGroup,
       FormControl} from  "@angular/forms";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  form:FormGroup;
  searchControl: FormControl;

  products: Product[] = [];

  constructor(private builder:FormBuilder,
              private productService:ProductService) { }

  ngOnInit() {

    this.searchControl = new FormControl("");

    this.form = this.builder.group({
        "searchTextControl" : this.searchControl
    });


    this.searchControl
    .valueChanges
    .map((value:string)=>value.trim())//remove space
     .filter((value:string)=>!!value && value.length>2)
     .debounceTime(400)//milli seconds after 400 ms it will call
    .subscribe ( (value: string) => {
      console.log("*", value, "*");

      this.productService.searchProducts(value)
      .subscribe ( (products: Product[]) => {
        this.products = products;
      })

    })

  }

}
