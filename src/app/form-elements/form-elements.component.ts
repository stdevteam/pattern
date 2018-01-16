import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css']
})
export class FormElementsComponent implements AfterViewInit {
  @ViewChild('code1') code1: ElementRef;
  @ViewChild('code2') code2: ElementRef;
  @ViewChild('code3') code3: ElementRef;
  @ViewChild('code4') code4: ElementRef;
  @ViewChild('code5') code5: ElementRef;
  @ViewChild('code6') code6: ElementRef;

  @ViewChild('code12') code12: ElementRef;


  @ViewChild('code17') code17: ElementRef;
  @ViewChild('code18') code18: ElementRef;
  @ViewChild('code19') code19: ElementRef;

  public minutes;


  ngAfterViewInit() {
    hljs.highlightBlock(this.code1.nativeElement);
    hljs.highlightBlock(this.code2.nativeElement);
    hljs.highlightBlock(this.code3.nativeElement);
    hljs.highlightBlock(this.code4.nativeElement);
    hljs.highlightBlock(this.code5.nativeElement);
    hljs.highlightBlock(this.code6.nativeElement);
    hljs.highlightBlock(this.code12.nativeElement);
    hljs.highlightBlock(this.code17.nativeElement);
    hljs.highlightBlock(this.code18.nativeElement);
    hljs.highlightBlock(this.code19.nativeElement);
  }

  onChangeMinutes(value): void {
    switch (value) {
      case '+':
        this.minutes = (typeof this.minutes === 'number' && this.minutes < 25) ? this.minutes += 1 : this.minutes = 25;
        break;
      case '-':
        this.minutes = (typeof this.minutes === 'number' && this.minutes > 0) ? this.minutes -= 1 : this.minutes = 0;
        break;
      case 5:
        this.minutes = 5;
        break;
      case 10:
        this.minutes = 10;
        break;
      case 15:
        this.minutes = 15;
        break;
      case 20:
        this.minutes = 20;
        break;
    }
  }
}
