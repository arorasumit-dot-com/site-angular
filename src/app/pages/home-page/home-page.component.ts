import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('titleState', [
      state(
        'inactive',
        style({
          opacity: 0,
        }),
      ),
      state(
        'active',
        style({
          opacity: 1,
        }),
      ),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('500ms ease-out')),
    ]),
    trigger('subTitleState', [
      state(
        'inactive',
        style({
          transform: 'scale(0)',
        }),
      ),
      state(
        'active',
        style({
          transform: 'scale(1)',
        }),
      ),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
    ]),
    trigger('socialState', [
      state(
        'inactive',
        style({
          opacity: 0,
          transform: 'scale(0)',
        }),
      ),
      state(
        'active',
        style({
          opacity: 1,
          transform: 'scale(1) rotate(360deg)',
        }),
      ),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('2000ms ease-out')),
    ]),
  ],
})
export class HomePageComponent implements OnInit {
  state = 'inactive';
  ngOnInit() {
    setTimeout(() => (this.state = 'active'), 500);
  }
}
