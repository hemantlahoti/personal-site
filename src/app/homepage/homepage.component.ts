import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  static welcomeTimeGap = 1500;

  welcomeMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.welcomeMessage = 'स्वागत हे!';
  }

  ngAfterViewInit(): void {
    this.welcomeInHindi();
  }

  private GoToSleep(callback: any) {
    setTimeout(function () {
      if (callback) {
        callback();
      }
    }, HomepageComponent.welcomeTimeGap);
  }

  private welcomeInEnglish() {
    const welcomeDiv = document.getElementById('welcome') as HTMLDivElement;
    this.welcomeMessage = 'Welcome!';
    welcomeDiv.classList.remove('fade-out');
    welcomeDiv.classList.add('fade-in');
    setTimeout(() => {
      welcomeDiv.classList.remove('fade-in');
      welcomeDiv.classList.add('fade-out');
      this.GoToSleep(this.welcomeInFrench.bind(this));
    }, HomepageComponent.welcomeTimeGap);
  }

  private welcomeInFrench(callback: any = null) {
    const welcomeDiv = document.getElementById('welcome') as HTMLDivElement;
    this.welcomeMessage = 'Bienvenue!';
    welcomeDiv.classList.remove('fade-out');
    welcomeDiv.classList.add('fade-in');
    setTimeout(() => {
      welcomeDiv.classList.remove('fade-in');
      welcomeDiv.classList.add('fade-out');
      if (callback) {
        this.GoToSleep(callback.bind(this));
      }
    }, HomepageComponent.welcomeTimeGap);
  }

  private welcomeInHindi() {
    const welcomeDiv = document.getElementById('welcome') as HTMLDivElement;
    setTimeout(() => {
      welcomeDiv.classList.remove('fade-in');
      welcomeDiv.classList.add('fade-out');
      this.GoToSleep(this.welcomeInEnglish.bind(this));
    }, HomepageComponent.welcomeTimeGap);
  }


}
