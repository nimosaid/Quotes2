import { Component } from '@angular/core';
import { Quotes } from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quotes(1, 'The sun is a star.','A.B Clark and Z.G'),
    new Quotes(2, 'The moon is beautiful.', 'B.C Smith and E.I'),
    new Quotes(3, 'The earth is meh.', 'D.E Jacobsons and T.O'),
    new Quotes(4, 'The galaxy is large.', 'F.G Randos and P.S'),
    new Quotes(5, 'The universe is expanding.', 'I.J Persons and Q.T'),
];
  constructor(){  }
}
