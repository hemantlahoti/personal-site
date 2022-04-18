import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  static welcomeTimeGap = 1500; // 1.5 secs
  static pageStartTimeout = 1500; // 1.5 secs
  static commandPromptChangeTimeout = 3000; // 3 secs

  welcomeMessage: string;
  showCommandPrompt = false;

  constructor() { }

  ngOnInit(): void {
    this.welcomeMessage = 'स्वागत हे!';
  }

  ngAfterViewInit(): void {
    this.GoToSleep(this.welcomeInHindi.bind(this), HomepageComponent.pageStartTimeout);
  }

  private GoToSleep(callback: any, timeout: number) {
    setTimeout(function () {
      if (callback) {
        callback();
      }
    }, timeout);
  }

  private welcomeInEnglish() {
    const welcomeDiv = document.getElementById('welcome') as HTMLDivElement;
    this.welcomeMessage = 'Welcome!';
    if (welcomeDiv) {
      welcomeDiv.classList.remove('fade-out');
      welcomeDiv.classList.add('fade-in');
      setTimeout(() => {
        welcomeDiv.classList.remove('fade-in');
        welcomeDiv.classList.add('fade-out');
        this.GoToSleep(this.welcomeInFrench.bind(this),HomepageComponent.welcomeTimeGap);
      }, HomepageComponent.welcomeTimeGap);
    }
  }

  private welcomeInFrench(callback: any = null) {
    const welcomeDiv = document.getElementById('welcome') as HTMLDivElement;
    this.welcomeMessage = 'Bienvenue!';
    if (welcomeDiv) {
      welcomeDiv.classList.remove('fade-out');
      welcomeDiv.classList.add('fade-in');
      setTimeout(() => {
        welcomeDiv.classList.remove('fade-in');
        welcomeDiv.classList.add('fade-out');
        this.GoToSleep(this.changeToCommandPrompt.bind(this),HomepageComponent.commandPromptChangeTimeout);
      }, HomepageComponent.welcomeTimeGap);
    }
  }

  private welcomeInHindi() {
    const welcomeDiv = document.getElementById('welcome') as HTMLDivElement;
    if (welcomeDiv) {
      welcomeDiv.classList.remove('fade-out');
      welcomeDiv.classList.add('fade-in');
      setTimeout(() => {
        welcomeDiv.classList.remove('fade-in');
        welcomeDiv.classList.add('fade-out');
        this.GoToSleep(this.welcomeInEnglish.bind(this),HomepageComponent.welcomeTimeGap);
      }, HomepageComponent.welcomeTimeGap);
    }
  }

  changeToCommandPrompt() {
    this.showCommandPrompt = true;
  }

}
