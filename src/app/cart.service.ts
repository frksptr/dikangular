import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CartService {
  items = [];

  constructor(private httpClient: HttpClient) {}

  getShippingPrices() {
    return this.httpClient.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
