import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { MathComponent } from './math/math.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, MathComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
