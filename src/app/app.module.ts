import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { QuoteFormComponents } from './quote-form/quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailComponent,  
    QuoteFormComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
