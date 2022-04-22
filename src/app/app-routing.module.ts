import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', loadChildren: () => import('./homepage/welcome.module').then(m => m.WelcomeModule)},
  { path: 'myexperience', loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)},
  { path: 'cmd', loadChildren: () => import('./command-prompt/commandprompt.module').then(m => m.CommandpromptModule)},
  { path: 'homepage', loadChildren: () => import('./homepage-tiles/homepage.module').then(m => m.HomepageModule)},
  { path: 'letsconnect', loadChildren: () => import('./lets-connect/letsconnect.module').then(m => m.LetsconnectModule)},
  { path: 'aboutme',  loadChildren: () => import('./aboutme/aboutme.module').then(m => m.AboutmeModule)},
  { path: '**', redirectTo: 'welcome'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
