import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandPromptRoutingModule } from './commandprompt-routing.module';
import { CommandPromptComponent } from './command-prompt.component';



@NgModule({
  declarations: [CommandPromptComponent],
  imports: [
    CommonModule,
    CommandPromptRoutingModule
  ]
})
export class CommandpromptModule { }
