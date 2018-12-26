import { Injectable } from '@angular/core';

@Injectable() // {providedIn: 'root'}
export class HeaderService {
  public PurchagePrice = 0;
  public SellingPrice = 0;
  constructor() {}
  CalculateProfit(): number {
    return this.SellingPrice - this.PurchagePrice;
  }
}
