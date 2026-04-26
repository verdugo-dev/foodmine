import { Cart } from './../shared/models/Cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);


  constructor() { }


  findCart(foodId: string): CartItem | null {
    return this.cart.items.find(item => item.food.id === foodId) || null;
  }


  addToCart(food: Food): void {
    const cartItem = this.findCart(food.id);

    if (cartItem) return;

    this.cart.items.push(new CartItem(food));

    this.setCartToLocalStorage();
  }


  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);

    this.setCartToLocalStorage();
  }


  changeQuantity(foodId: string, quantity: number): void {
    const cartItem = this.findCart(foodId);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;

    this.setCartToLocalStorage();
  }


  clearCart(): void {
    this.cart = new Cart();

    this.setCartToLocalStorage();
  }


  getCartObservable() {
    return this.cartSubject.asObservable();
  }


  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((total, item) => total + item.price, 0);
    this.cart.totalCount = this.cart.items.reduce((total, item) => total + item.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);

    this.cartSubject.next(this.cart);
  }


  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }


}
