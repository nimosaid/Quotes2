import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes'


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Keeper', 23, 'Great quote'),
    new Quotes( 'Lover', 21 , 'What a quote!!'),
    new Quotes('Roller' , 12, 'I can roll with this'),
  ];

  toggleDetails(index) {
    this.quotes[index].showComment = !this.quotes[index].showComment;
  }
  completeQuotes(isComplete, index){
   if (isComplete) {
     let toDelete = confirm(`Are sure you want to delete this ${this.quotes[index].name}`)

     if(toDelete){
       this.quotes.splice(index, 1)
}
   }
 }




  constructor() { }

  ngOnInit() {
  }

}
