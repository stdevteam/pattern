import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import {MatSelectModule, MatFormFieldModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {NgSlimScrollModule} from 'ngx-slimscroll';
import {ToogleDirective} from './directives/toogle.directive';

import { AppComponent } from './app.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './tables/tables.component';
import { DialogOverviewExampleDialog } from './popups/popups.component';
import { DialogOverviewExampleDialogLg } from './popups/popups.component';
import { TabsComponent } from './tabs/tabs.component';
import { PopupsComponent } from './popups/popups.component';
import { AccordionComponent } from './accordion/accordion.component';
import { OthersComponent } from './others/others.component';
import { GetStartedComponent } from './get-started/get-started.component';


@NgModule({
  declarations: [
    AppComponent,
    ToogleDirective,
    FormElementsComponent,
    GridSystemComponent,
    IconsComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialogLg,
    TypographyComponent,
    SidebarComponent,
    TablesComponent,
    TabsComponent,
    PopupsComponent,
    AccordionComponent,
    OthersComponent,
    GetStartedComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgSlimScrollModule,
    HighlightModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'form-elements', component: FormElementsComponent
      },
      {
        path: 'grid-system', component: GridSystemComponent
      },
      {
        path: 'icons', component: IconsComponent
      },
      {
        path: 'typography', component: TypographyComponent
      },
      {
        path: 'sidebar', component: SidebarComponent
      },
      {
        path: 'tables', component: TablesComponent
      },
      {
        path: 'tabs', component: TabsComponent
      },
      {
        path: 'popups', component: PopupsComponent
      },
      {
        path: 'accordion', component: AccordionComponent
      },
      {
        path: 'others', component: OthersComponent
      },
      {
        path: 'get-started', component: GetStartedComponent
      },
      { path: '',
        redirectTo: '/get-started',
        pathMatch: 'full'
      },
    ])
  ],

  entryComponents: [
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialogLg
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
