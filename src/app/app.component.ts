import { Component } from '@angular/core';
import { Folder } from './folder';
import { LinkItem } from './link-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio for Scott McDonald';

  folderOne: Folder;
  folderTwo: Folder;

  constructor() {

    const folderOneLinks = [
      new LinkItem("cf1-li1", "GitHub", "https://github.com/scottmcdonald1"),
      new LinkItem("cf1-li2", "LinkedIn", "https://www.linkedin.com/in/scott-mcdonald-0303/"),
    ]

    const folderTwoLinks = [
      new LinkItem("cf2-li1", "Bookbase", "https://bookbase-app.herokuapp.com/"),
      new LinkItem("cf2-li2", "Trash Doodles", "https://www.trashdoodles.com/"),
    ]
    
    this.folderOne = new Folder("cf1", "About Me", folderOneLinks);
    this.folderTwo = new Folder("cf2", "Projects", folderTwoLinks);
    

  }
}
