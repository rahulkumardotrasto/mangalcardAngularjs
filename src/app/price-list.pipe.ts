import { Pipe } from '@angular/core';
@Pipe({
name: 'priceList'
})
export class PriceListPipe {
  transform(cardItems) {
    const arr = [];
cardItems.forEach(cardItem => {
    if (arr.indexOf(cardItem.price) <= -1) {
        arr.push(cardItem.price);
    }
});
return arr.join(', ');
  }
}
