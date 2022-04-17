import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'InputAndOutputDecorator';
  oddNumer: number[] = [];
  evenNumer: number[] = [];

  onintervalFired(event: number) {
    // console.log(event);
    if (event % 2 != 0) this.oddNumer.push(event);
    else this.evenNumer.push(event);
  }
}
