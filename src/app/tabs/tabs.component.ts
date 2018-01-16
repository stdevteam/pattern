import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as hljs from 'highlight.js';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements AfterViewInit {
  tab: string;
  @ViewChild('code1') code1: ElementRef;
  onChangeTab(tab) {
    this.tab = tab;
  }


  ngAfterViewInit() {
    hljs.highlightBlock(this.code1.nativeElement);
  }

}
