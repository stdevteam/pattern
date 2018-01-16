import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterViewInit {

    @ViewChild('code10') code10: ElementRef;

    ngAfterViewInit() {
        hljs.highlightBlock(this.code10.nativeElement);
    }

}
