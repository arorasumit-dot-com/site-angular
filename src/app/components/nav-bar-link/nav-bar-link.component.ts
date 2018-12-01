import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-link',
  templateUrl: './nav-bar-link.component.html',
  styles: [`
    :host {
      flex-grow: 1;
      text-align: center;
      height: 60px;
      line-height: 60px;
    }
    a {
      color: #FFF;
      text-decoration: none;
    }
  `]
})
export class NavBarLinkComponent {

  @Input()
  public title: string;

  @Input()
  public url: string;

}
