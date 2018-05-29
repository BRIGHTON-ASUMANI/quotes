import { Component } from '@angular/core';
import {Quote} from './quote';
import * as $ from "jquery"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  quotes = []

}
