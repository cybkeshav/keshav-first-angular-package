import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public result = 0;
  constructor(private _headerService: HeaderService) {}
  ngOnInit() {
    this.result = this._headerService.add(10, 20);
  }
}
