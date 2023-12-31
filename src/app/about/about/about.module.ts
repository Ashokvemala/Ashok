import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from '../about.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class AboutModule { }
