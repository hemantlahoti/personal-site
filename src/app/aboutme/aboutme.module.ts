import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from './aboutme.component';
import { AboutMeRoutingModule } from './aboutme-routing.module';


@NgModule({
  declarations: [AboutmeComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule
  ]
})
export class AboutmeModule { }
