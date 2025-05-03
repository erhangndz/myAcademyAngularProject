import { Component } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { Product } from '../../_models/product';

@Component({
  selector: 'app-main-product',
  standalone: false,
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent {
  products: Product[];

  /**
   *
   */
  constructor(private productService: ProductService) {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe({
      next: values => this.products = values
    });
  }
}
