import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})


export class QuotesDetailComponent implements OnInit {

  votes: number;

  @Input () quotes:Quotes;
  vote = 0;

  constructor() {
   this.votes = 0;
 }

 likeVote(): boolean{
     this.votes +=1;
     return false;
   }

   dislikeVote(): boolean{
    this.votes -=1;
    return false;
  }

 ngOnInit() {
  };

}
