import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { RouterModule } from '@angular/router';
import { RxjsRoutingModule } from './rxjs.routing';
import { HotColdComponent } from './hot-cold/hot-cold.component';
import { SubjectsComponent } from './subjects/subjects.component';



@NgModule({
  declarations: [
    RxjsComponent,
    UnsubscribeComponent,
    HotColdComponent,
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
