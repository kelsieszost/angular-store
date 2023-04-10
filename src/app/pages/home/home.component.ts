import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Product } from 'src/app/models/product.model';
// import { CartService } from 'src/app/services/cart.service';
// import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
  })
  export class HomeComponent implements OnInit{
    cols: number = 3;
    category: string | undefined;
    
    constructor() {}

    ngOnInit(): void {
      
    }

    onColumnsCountChange(colsNum: number): void {
      this.cols = colsNum;
    }

    onShowCategory(newCategory: string): void {
      this.category = newCategory;
    }

    }