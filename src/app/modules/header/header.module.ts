import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

import { HeaderService } from 'src/app/header.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
  providers: [
    // no need to place providers if `providedIn` flag is added in service.
    HeaderService,
  ],
})
export class HeaderModule {}
