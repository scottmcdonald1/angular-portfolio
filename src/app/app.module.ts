import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleFolderComponent } from './components/circle-folder/circle-folder.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CircleLinkComponent } from './components/circle-link/circle-link.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleFolderComponent,
    SideNavComponent,
    CircleLinkComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
