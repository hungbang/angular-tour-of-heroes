import { Component, OnInit } from '@angular/core';
import {products} from '../model/products';

@Component({
  selector: 'app-kendoui',
  templateUrl: './kendoui.component.html',
  styleUrls: ['./kendoui.component.css']
})
export class KendouiComponent implements OnInit {
  public gridData: any[] = products;
  constructor() { }

  ngOnInit() {
  }


}
