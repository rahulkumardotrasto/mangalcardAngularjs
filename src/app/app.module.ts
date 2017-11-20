import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardItemComponent } from './card-item.component'
import { CardItemListComponent } from './card-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CardItemFormComponent } from './card-item-form.component';
import { PriceListPipe  } from './price-list.pipe';
import { CardItemService } from './card-item.service';
import { lookupListToken, lookupLists  } from './providers';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    CardItemListComponent,
    FavoriteDirective,
    CardItemFormComponent,
    PriceListPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   HttpModule,
   routing
  ],
  providers: [
    CardItemService,
    { provide: lookupListToken , useValue: lookupLists  },
    { provide: XHRBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
