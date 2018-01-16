import {Component, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import * as hljs from 'highlight.js';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute) {

  }
  fragment;
  @ViewChild('code1') code1: ElementRef;

  @ViewChild('code5') code5: ElementRef;
  @ViewChild('code6') code6: ElementRef;
  @ViewChild('code7') code7: ElementRef;
  @ViewChild('code8') code8: ElementRef;

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }


  ngAfterViewInit() {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }

    hljs.highlightBlock(this.code1.nativeElement);
    hljs.highlightBlock(this.code5.nativeElement);
    hljs.highlightBlock(this.code6.nativeElement);
    hljs.highlightBlock(this.code7.nativeElement);
    hljs.highlightBlock(this.code8.nativeElement);

  }
}
