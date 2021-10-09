import { Component, Input, OnInit } from '@angular/core';
import { LinkItem } from 'src/app/link-item';

@Component({
  selector: 'app-circle-link',
  templateUrl: './circle-link.component.html',
  styleUrls: ['./circle-link.component.css']
})
export class CircleLinkComponent implements OnInit {

  @Input() link: LinkItem;

  constructor() { }

  ngOnInit() {
  }

}