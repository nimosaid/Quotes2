import { Component } from '@angular/core';
import { Quotes } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quotes(1, 'The sun is a star.','A.B Clark',"Z.G"),
    new Quotes(2, 'The moon is beautiful.', 'B.C Smith',"E.I"),
    new Quotes(3, 'The earth is meh.', 'D.E Jacobsons',"T.O"),
    new Quotes(4, 'The galaxy is large.', 'F.G Randos',"P.S"),
    new Quotes(5, 'The universe is expanding.', 'I.J Persons',"Q.T"),
];
  constructor(){  }
}
