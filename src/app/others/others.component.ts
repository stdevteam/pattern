import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements AfterViewInit {

  @ViewChild('code1') code1: ElementRef;

  ngAfterViewInit() {
    hljs.highlightBlock(this.code1.nativeElement);
  }

}
