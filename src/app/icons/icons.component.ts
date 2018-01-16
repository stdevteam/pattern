import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements AfterViewInit {
  @ViewChild('code4') code4: ElementRef;

  ngAfterViewInit() {
    hljs.highlightBlock(this.code4.nativeElement);
  }

}
