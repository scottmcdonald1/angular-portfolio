import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../../classes/Folder';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() folders: Folder[];

  constructor() { }

  ngOnInit() {
  }

  toggleActive(elementId) {
    const element = document.getElementById(elementId);
    element.classList.toggle('active');
  }

}
