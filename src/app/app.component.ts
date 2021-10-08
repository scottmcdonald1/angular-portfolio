import { Component } from '@angular/core';
import { Folder } from './Folder';
import { FOLDERS } from './folders';
// import { LinkItem } from './link-item';

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
