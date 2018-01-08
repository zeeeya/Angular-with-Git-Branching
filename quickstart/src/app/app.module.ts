import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';

@NgModule({
  declarations: [
  AppComponent,
  HighlightDirective,
  HighlightDirective,
  TitleComponent,
],
  imports: [ BrowserModule ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }