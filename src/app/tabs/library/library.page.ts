import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../../quotes/quotes.page';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];
  quotesPage: QuotesPage;

  constructor() { }

  ngOnInit() {
    this.quoteCollection = quotes;
  }

  buttonClick() {

  }
}
