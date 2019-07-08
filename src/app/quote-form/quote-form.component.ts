import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponents implements OnInit {
  newquotes=new Quotes(0,"", "", new Date());

  @Output() addQuotes=new EventEmitter <Quotes>();


  submitQuotes(){
    this.addQuotes.emit(this.newquotes);
  }


  constructor() { }

  ngOnInit() {
  }

}
