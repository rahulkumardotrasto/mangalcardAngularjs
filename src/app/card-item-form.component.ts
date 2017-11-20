import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {  Validators, FormBuilder } from '@angular/forms';
import { CardItemService } from './card-item.service';
import { lookupListToken } from './providers';
@Component({
    selector: 'app-card-item-form',
    templateUrl: './card-item-form.component.html',
    styleUrls: ['./card-item-form.component.css']
})
export class CardItemFormComponent {
  form;
  constructor(private formBuilder: FormBuilder,
    private cardItemService: CardItemService,
    @Inject(lookupListToken) public lookupList,
  private router: Router
  ) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      Description: this.formBuilder.control(''),
      category: this.formBuilder.control('Party'),
      Price: this.formBuilder.control('', this.PriceValidator),
    });
  }
PriceValidator(control) {
  if(control.value.trim().length === 0) {
    return null;
  }
  let Price = parseInt(control.value);
  let minPrice = 100;
  let maxPrice = 9000;
  if(Price  >= minPrice && Price <= maxPrice) {
    return null;
  } else {
    return {
    'Price': {
      min: minPrice,
      max: maxPrice
      }
    };
  }
  }
  onSubmit(cardItem) {
this.cardItemService.add(cardItem)
  .subscribe(() => {
    this.router.navigate(['/', cardItem.category]);
  }) ;
  }
}
