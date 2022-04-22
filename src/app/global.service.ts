import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public showCommandPrompt = false;
  public showHomePageTiles = false;

  constructor() { }

  ToShowCommandPrompt(){
    this.showCommandPrompt = true;
    this.showHomePageTiles = false;
  }

  ToShowHomePageTiles() {
    this.showCommandPrompt = false;
    this.showHomePageTiles = true;
  }

}
