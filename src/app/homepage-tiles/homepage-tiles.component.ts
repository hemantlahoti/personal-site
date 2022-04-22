import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-homepage-tiles',
  templateUrl: './homepage-tiles.component.html',
  styleUrls: ['./homepage-tiles.component.scss']
})
export class HomepageTilesComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  bringBackCMD() {
    this.globalService.ToShowCommandPrompt();
  }

  goToInstagram() {
    //window.open('https://www.instagram.com/hemantlahoti_/');
  }

  downloadResume() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/Resume_Hemant_Lahoti.pdf';
    link.download = 'Resume_Hemant_Lahoti.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
