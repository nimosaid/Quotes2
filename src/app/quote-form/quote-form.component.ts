import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '..quotes'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class quoteFormComponent implements OnInit {
  newquotes=new quotes(0,"","","");
  @Output() addquotes=new EventEmitter <quotes>();


  submitQuotes(){
    this.addquotes.emit(this.newquotes);
  }


  constructor() { }

  ngOnInit() {
  }

}
