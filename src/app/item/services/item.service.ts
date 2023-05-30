import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private _http: HttpClient) {}

  addItem(itemData: any): Observable<any> {
    return this._http.post('http://localhost:3000/items', itemData);
  }

  updateItem(id: number, itemData: any): Observable<any> {
    return this._http.put(`http://localhost:3000/items/${id}`, itemData);
  }

  getItemList(): Observable<any> {
    return this._http.get('http://localhost:3000/items');
  }

  deleteItem(itemId: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/items/${itemId}`);
  }
}
