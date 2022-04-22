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
    }, 25000);
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
}
