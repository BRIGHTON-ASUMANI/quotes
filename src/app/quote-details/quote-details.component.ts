import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
import * as $ from "jquery"

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

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
