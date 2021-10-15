import { Component } from '@angular/core';
import { Folder } from './classes/Folder';
import { FOLDERS } from './mock-folders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio for Scott McDonald';

  folders: Folder[] = FOLDERS;

  constructor() {

  }
}
