import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  static welcomeTimeGap = 1500; // 1.5 seconds
  static pageStartTimeout = 1500; // 1.5 seconds
  static commandPromptChangeTimeout = 3000; // 3 seconds


  welcomeMessage: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.welcomeMessage = 'नमस्ते!';
  }

  ngAfterViewInit(): void {
    this.GoToSleep(this.welcomeInEnglish.bind(this), HomepageComponent.pageStartTimeout);
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
        this.GoToSleep(this.welcomeInHindi.bind(this), HomepageComponent.welcomeTimeGap);
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
        this.GoToSleep(this.changeToCommandPrompt.bind(this), HomepageComponent.commandPromptChangeTimeout);
      }, HomepageComponent.welcomeTimeGap);
    }
  }

  private welcomeInHindi() {
    const welcomeDiv = document.getElementById('welcome') as HTMLDivElement;
    this.welcomeMessage = 'नमस्ते!';
    if (welcomeDiv) {
      welcomeDiv.classList.remove('fade-out');
      welcomeDiv.classList.add('fade-in');
      setTimeout(() => {
        welcomeDiv.classList.remove('fade-in');
        welcomeDiv.classList.add('fade-out');
        this.GoToSleep(this.welcomeInFrench.bind(this), HomepageComponent.welcomeTimeGap);
      }, HomepageComponent.welcomeTimeGap);
    }
  }

  changeToCommandPrompt() {
    this.router.navigateByUrl('/cmd');
    
  }


}
