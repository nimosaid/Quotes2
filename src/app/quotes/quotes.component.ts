import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes(1, 'The sun is a star.','A.B Clark and Z.G'),
    new Quotes(2, 'The moon is beautiful.', 'B.C Smith and E.I'),
    new Quotes(3, 'The earth is meh.', 'D.E Jacobsons and T.O',
    new Quotes(4, 'The galaxy is large.', 'F.G Randos and P.S'),
    new Quotes(5, 'The universe is expanding.', 'I.J Persons and Q.T'),
];

addNewQuote(quotes){
 let quoteLength = this.quotes.length;
 quotes.id=quoteLength+1;
 this.quotes.unshift(quotes)

}

toogleDetails(index){
 this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}


deleteQuote(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const
      let toDelete = confirm(`Are you sure you want to delete this ${this.Quotes[index].name}`);
      if (toDelete) {
        this.Quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
