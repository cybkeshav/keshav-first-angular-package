import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public Profit = 0;
  constructor(private _headerService: HeaderService) {}
  ngOnInit() {
    this._headerService.PurchagePrice = 120;
    this._headerService.SellingPrice = 200;
    this.Profit = this._headerService.CalculateProfit();
  }
}
