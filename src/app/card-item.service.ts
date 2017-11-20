import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class CardItemService {
  constructor(private http: Http) {

  }
  get(category) {
    let searchParams = new URLSearchParams();
    searchParams.append('category', category);
  return this.http.get('carditems', { search: searchParams })
    .map(response => {
    return response.json().cardItems;
  });
  }
  add(cardItem) {
   return this.http.post('carditems', cardItem)
    .map(response => {});
  }
  delete(cardItem) {
   return  this.http.delete(`carditems/${cardItem.id}`)
      .map(response => {} );
    }
  }
}
