import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = products;


  sharetg(productName: string, productLink: string) {
    const shareMessage = `Check out this product: ${productName} - ${productLink}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }
    sharekaspi(productLink: string) {
        window.location.href = productLink;
    }


}
