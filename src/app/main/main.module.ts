import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MathService} from "../math.service";
import {MathComponent} from "../math/math.component";
 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MathComponent],
  providers: [MathService],
  exports: [MathComponent]
})

export class MainModule { }