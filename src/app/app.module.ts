import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ExperienceComponent } from './experience/experience.component';
import { CommandPromptComponent } from './command-prompt/command-prompt.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ExperienceComponent,
    CommandPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
