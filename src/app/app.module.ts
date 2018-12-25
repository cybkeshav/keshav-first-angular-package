import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';

import { BrowserModule } from '@angular/platform-browser';
import { MathComponent } from './math/math.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, MathComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
