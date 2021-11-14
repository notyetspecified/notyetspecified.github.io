import { Injectable } from '@angular/core';
import { data } from '../../data';

@Injectable({
  providedIn: 'root',
})
export class DataProvider {
  public data: any;
  constructor() {
    this.data = data;
  }
}
