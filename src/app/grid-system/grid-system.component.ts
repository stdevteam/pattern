import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.css']
})
export class GridSystemComponent implements AfterViewInit{

  @ViewChild('code4') code4: ElementRef;

  ngAfterViewInit() {
    hljs.highlightBlock(this.code4.nativeElement);
  }
}
