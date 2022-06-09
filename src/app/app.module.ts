import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimerBlockComponent } from './timer-block/timer-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
