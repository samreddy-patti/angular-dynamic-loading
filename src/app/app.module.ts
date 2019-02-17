import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabOneComponent,TabTwoComponent } from './tab';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TabOneComponent, TabTwoComponent ],
  entryComponents: [TabOneComponent, TabTwoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
