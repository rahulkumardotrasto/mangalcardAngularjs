import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
@Input() cardItem;
@Output() delete= new EventEmitter();
onDelete() {
  this.delete.emit(this.cardItem);
}
}



