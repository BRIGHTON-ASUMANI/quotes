import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import {Quote} from '../quote';
import * as $ from "jquery"
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
   newQuote=new Quote(0,"","","",new Date());
       @Output() addQuote=new EventEmitter<Quote>();

       submitQuote(){
           this.addQuote.emit(this.newQuote);
         }



  constructor() {
  }

  ngOnInit() {
    var counter = 0;

    $("#plus").click(function(){
      counter++;
      $("#count").text(counter);
    });

    $("#minus").click(function(){
      counter--;
      $("#count").text(counter);
    });

  }

}
