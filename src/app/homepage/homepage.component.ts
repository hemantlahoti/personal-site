import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  static welcomeTimeGap = 1500; // 1.5 seconds
  static pageStartTimeout = 1500; // 1.5 seconds
  static commandPromptChangeTimeout = 3000; // 3 seconds

  public removePressEventListener: () => void;
  public removeClickEventListener: () => void;
  
  welcomeMessage: string;
  showCommandPrompt = false;
  showHomePageTiles = false;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.welcomeMessage = 'नमस्ते!';
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
        this.GoToSleep(this.welcomeInFrench.bind(this), HomepageComponent.welcomeTimeGap);
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
    if (welcomeDiv) {
      welcomeDiv.classList.remove('fade-out');
      welcomeDiv.classList.add('fade-in');
      setTimeout(() => {
        welcomeDiv.classList.remove('fade-in');
        welcomeDiv.classList.add('fade-out');
        this.GoToSleep(this.welcomeInEnglish.bind(this), HomepageComponent.welcomeTimeGap);
      }, HomepageComponent.welcomeTimeGap);
    }
  }

  changeToCommandPrompt() {
    this.showCommandPrompt = true;
    setTimeout(() => {
      this.removeClickEventListener = this.renderer.listen(document, 'click', (event) => {
        this.handleAnchorClick(event);
      });
      this.removePressEventListener = this.renderer.listen(document, 'keypress', (event) => {
        this.handleAnchorClick(event);
      });
    }, 25000);
  }

  handleAnchorClick(event) {
    this.showCommandPrompt = false;
    this.showHomePageTiles = true;
    this.removeClickEventListener();
    this.removePressEventListener();
  }

}
