import { Component, OnDestroy, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id:number]: number} = { 1:400, 3:335, 4:350};
// import { Product } from 'src/app/models/product.model';
// import { CartService } from 'src/app/services/cart.service';
// import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
  })
  export class HomeComponent implements OnInit{
    cols: number = 3;
    rowHeight = ROWS_HEIGHT[this.cols];
    category: string | undefined;
    
    constructor() {}

    ngOnInit(): void {
      
    }

    onColumnsCountChange(colsNum: number): void {
      this.cols = colsNum;
      this.rowHeight = ROWS_HEIGHT[this.cols];
    }

    onShowCategory(newCategory: string): void {
      this.category = newCategory;
    }

    }