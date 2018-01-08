import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { AwesomePipe } from './awesome.pipe';

@NgModule({
 declarations: [
  AppComponent,
  HighlightDirective,
  TitleComponent,

  AwesomePipe,
  ContactComponent,
  ContactHighlightDirective
],
  imports: [ BrowserModule, FormsModule ],
 providers: [ ContactService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }