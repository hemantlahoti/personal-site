import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CommandPromptComponent } from './command-prompt/command-prompt.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomepageTilesComponent } from './homepage-tiles/homepage-tiles.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LetsConnectComponent } from './lets-connect/lets-connect.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: HomepageComponent },
  { path: 'myexperience', component: ExperienceComponent },
  { path: 'cmd', component: CommandPromptComponent},
  { path: 'homepage', component: HomepageTilesComponent},
  { path: 'letsconnect', component: LetsConnectComponent},
  { path: 'aboutme', component: AboutmeComponent},
  { path: '**', redirectTo: 'welcome'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
