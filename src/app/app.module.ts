import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleFolderComponent } from './circle-folder/circle-folder.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleFolderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
