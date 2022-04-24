import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss']
})
export class CommandPromptComponent implements OnInit, AfterViewInit, OnDestroy {
  public removePressEventListener: () => void;
  public removeClickEventListener: () => void;
  public timeout: any = null;
  private isCmdMax = false;
  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const cursorIcon = document.getElementById('cursorIcon') as HTMLSpanElement;
    if (cursorIcon) {
      setTimeout(() => {
        cursorIcon.style.display = 'none';
        this.ShowCmdBody();
      }, 3100);
    }
    this.timeout = setTimeout(() => {
      this.removeClickEventListener = this.renderer.listen(document, 'click', (event) => {
        this.handleAnchorClick(event);
      });
      this.removePressEventListener = this.renderer.listen(document, 'keypress', (event) => {
        this.handleAnchorClick(event);
      });
    }, 23000);
  }

  ngOnDestroy(): void {
    if(this.timeout){
      clearTimeout(this.timeout);
    }
  }
  
  handleAnchorClick(event) {
    this.router.navigate(['/homepage']);
    this.removeClickEventListener();
    this.removePressEventListener();
  }

  ShowCmdBody() {
    setTimeout(() => {
      const cmdBody = document.getElementById('cmdBody') as HTMLDivElement;
      if (cmdBody) {
        cmdBody.style.display = 'inline-block';
      }
    }, 1000);
  }

  changeView() {
    this.router.navigate(['/homepage']);
  }

  maximizeView() {
    const div = document.getElementById('commandPromptDiv') as HTMLDivElement;
    const button =  document.getElementById('maxBtn') as HTMLButtonElement;
    if(!this.isCmdMax){
      if(div){
        div.classList.remove('minimizeCmd');
        div.classList.add('maximizeCmd');
      }
      if(button){
        button.classList.add('minbg');
        button.classList.remove('maxgb');
      }
    } else {
      if(div){
        div.classList.remove('maximizeCmd');
        div.classList.add('minimizeCmd');
      }
      if(button){
        button.classList.add('maxgb');
        button.classList.remove('minbg');
      }
    }

    this.isCmdMax = !this.isCmdMax;
  }
}
