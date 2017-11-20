import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardItemService } from './card-item.service';
@Component({
    selector: 'app-card-item-list',
    templateUrl: './card-item-list.component.html',
    styleUrls: ['./card-item-list.component.css']
})
export class CardItemListComponent {
  category = '';
  cardItems = [];
  paramsSubscription;
constructor(private cardItemService: CardItemService,
private activatedRoute: ActivatedRoute) {
}
 ngOnInit() {
this.paramsSubscription = this.activatedRoute.params
   .subscribe(params => {
     let category = params['category'];
     if (category.toLowerCase() === 'all') {
       category = '';
     }
     this.getCardItems(category);
   });
 }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
  onCardItemDelete(cardItem) {
  this.cardItemService.delete(cardItem)
    .subscribe(() => {
    this.getCardItems(this.category);
    } );
   }
  getCardItems(category) {
    this.category = category;
  this.cardItemService.get(category)
   .subscribe(cardItems => {
     this.cardItems = cardItems;
   });
  }
}
