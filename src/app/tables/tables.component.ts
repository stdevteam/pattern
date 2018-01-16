import {Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements AfterViewInit {

  @ViewChild('code7') code7: ElementRef;
  @ViewChild('code9') code9: ElementRef;
  @ViewChild('code10') code10: ElementRef;
  @ViewChild('code12') code12: ElementRef;

  ngAfterViewInit() {
    hljs.highlightBlock(this.code7.nativeElement);
    hljs.highlightBlock(this.code9.nativeElement);
    hljs.highlightBlock(this.code10.nativeElement);
    hljs.highlightBlock(this.code12.nativeElement);
  }

}


