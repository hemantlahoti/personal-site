import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetsConnectComponent } from './lets-connect.component';
import { LetsconnectRoutingModule } from './letsconnect-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LetsConnectComponent],
  imports: [
    CommonModule,
    LetsconnectRoutingModule,
    ReactiveFormsModule
  ]
})
export class LetsconnectModule { }
