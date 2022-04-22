import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageTilesComponent } from './homepage-tiles.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [HomepageTilesComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
