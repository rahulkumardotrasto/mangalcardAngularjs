import { Component } from '@angular/core';
import { Identifier } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstCardItem = {
type: 'Marriage'
  };
  secondCardItem = {
type: null
  };
  onMediaItemDelete(mediaItem) {
  }
}
