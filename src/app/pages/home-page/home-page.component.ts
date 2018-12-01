import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('heroState', [
      state(
        'inactive',
        style({
          transform: 'scale(1)',
        }),
      ),
      state(
        'active',
        style({
          transform: 'scale(1.2)',
        }),
      ),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
    ]),
  ],
})
export class HomePageComponent implements OnInit {
  state = 'inactive';
  ngOnInit() {
    // setTimeout(() => {
    //   this.state = 'active';
    // }, 5 * 1000);
  }
}
