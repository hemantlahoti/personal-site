import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-command-prompt',
  templateUrl: './command-prompt.component.html',
  styleUrls: ['./command-prompt.component.scss']
})
export class CommandPromptComponent implements OnInit, AfterViewInit {

  constructor(private globalService: GlobalService) { }

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
    this.globalService.showCommandPrompt = false;
    this.globalService.showHomePageTiles = true;
  }
}
