import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes(0, 'The sun is a star.' , 'A.B Clark and Z.G', new Date(2019,3,14)),
    new Quotes(0, 'The moon is beautiful.' , 'B.C Smith and E.I', new Date(2019,5,14)),
    new Quotes(0, 'The earth is meh.',  'D.E Jacobsons and T.O', new Date(2019,9,14)),
    new Quotes(0, 'The galaxy is large.' ,  'F.G Randos and P.S', new Date(2019,12,14)),
    new Quotes(0, 'The universe is expanding.',  'I.J Persons and Q.T', new Date(2019,23,14)),
];

addNewQuote(quotes){
 let quoteLength = this.quotes.length;
 quotes.id=quoteLength+1;
 this.quotes.unshift(quotes)

}

toggleDetails(index){
 this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}


deleteQuote(isComplete, index) {
    if (isComplete) {
      // deleting this //
      let toDelete = confirm(`Are you sure you want to delete this ${this.quotes[index].quote}`);
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
