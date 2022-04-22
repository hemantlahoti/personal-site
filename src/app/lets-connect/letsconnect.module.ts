import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetsConnectComponent } from './lets-connect.component';
import { LetsconnectRoutingModule } from './letsconnect-routing.module';

@NgModule({
  declarations: [LetsConnectComponent],
  imports: [
    CommonModule,
    LetsconnectRoutingModule
  ]
})
export class LetsconnectModule { }
