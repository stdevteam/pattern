import {Component, OnInit, Inject, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as hljs from 'highlight.js';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements AfterViewInit {
  @ViewChild('code1') code1: ElementRef;

    constructor(public dialog: MatDialog) {

    }

  ngAfterViewInit() {
    hljs.highlightBlock(this.code1.nativeElement);
  }

  openDialog(): void {
    //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: { data: 'data' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
    openDialogLg(): void {
        //noinspection TypeScriptUnresolvedFunction,TypeScriptValidateTypes
        let dialogRef = this.dialog.open(DialogOverviewExampleDialogLg, {
            data: { data: 'data' }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
    //noinspection JSAnnotator
    constructor(public dialogRef: MatDialogRef<PopupsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        //noinspection TypeScriptUnresolvedFunction
        this.dialogRef.close();
    }

}
@Component({
    selector: 'dialog-overview-example-dialog-lg',
    templateUrl: './dialog-overview-example-dialog-lg.html',
})
export class DialogOverviewExampleDialogLg {
    //noinspection JSAnnotator
    constructor(public dialogRefLg: MatDialogRef<PopupsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        //noinspection TypeScriptUnresolvedFunction
        this.dialogRefLg.close();
    }

}
