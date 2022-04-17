import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PAGES } from './app-enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hemant Lahoti';
  PAGES = PAGES;
  currentPage = PAGES.HOME;

  constructor(private RTR: Router) {

  }

  OnPageSelection(index: PAGES) {
    this.currentPage = index;
    this.RTR.navigate([this.GetNavigateURL(index)]);
  }

  GetNavigateURL(index: PAGES) {
    let url: string = '/home';
    switch (index) {
      case PAGES.HOME:
        url = '/home';
        break;
      case PAGES.EXPERIENCE:
        url = '/experience';
        break;
      default: 
        break;
    }
    return url;
  }

}
