import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-tiles',
  templateUrl: './homepage-tiles.component.html',
  styleUrls: ['./homepage-tiles.component.scss']
})
export class HomepageTilesComponent implements OnInit {
p
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  bringBackCMD() {
    this.router.navigate(['/cmd']);
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

  letsConnect() {
    this.router.navigate(['/letsconnect']);
  }

  aboutMe() {
    this.router.navigate(['/aboutme']);
  }

  myExperiences() {
    this.router.navigate(['/myexperience']);
  }

}
