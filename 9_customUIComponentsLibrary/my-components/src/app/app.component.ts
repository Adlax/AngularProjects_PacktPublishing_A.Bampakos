import { Component } from '@angular/core';
import { Card } from 'ui-controls';
import { assassins } from '../assets/assassins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-components';
  cards: Card[] = assassins;
  // title = '' ;

  onCardChange(cards: Card[]) {
    console.log(cards);
  }

  log() {
    alert(this.title + ' copied to the clipboard');
  }

}
