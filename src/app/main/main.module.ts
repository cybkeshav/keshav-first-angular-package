import { MathService } from '../math.service';
import { MathComponent } from '../math/math.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [MathComponent],
  providers: [MathService],
  exports: [MathComponent],
})
export class MainModule {}
