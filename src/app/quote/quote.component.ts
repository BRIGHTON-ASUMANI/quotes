import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
      
  ]

    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)
            }
        }
      }


      addNewQuote(quote){
             let quoteLength = this.quotes.length;
             quote.id=quoteLength+1;
             quote.completeDate = new Date(quote.completeDate)
             this.quotes.push(quote)

         }

  constructor() { }

  ngOnInit() {
  }
}
