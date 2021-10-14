import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../../classes/Folder';

@Component({
  selector: 'app-circle-folder',
  templateUrl: './circle-folder.component.html',
  styleUrls: ['./circle-folder.component.css']
})
export class CircleFolderComponent implements OnInit {

  @Input() folder: Folder;

  constructor() { }

  ngOnInit() {
  }

}