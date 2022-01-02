import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkedListsRoutingModule } from './linked-lists.routing';
import { LlPractComponent } from './ll-pract/ll-pract.component';
import { RouterModule } from '@angular/router';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { MergeSortPractComponent } from './merge-sort-pract/merge-sort-pract.component';
import { MergeSortPureComponent } from './merge-sort-pure/merge-sort-pure.component';
import { FormsModule } from '@angular/forms';
import { LinkedListsComponent } from './linked-lists.component';


@NgModule({
  declarations: [
    LlPractComponent,
    LinkedListComponent,
    MergeSortComponent,
    MergeSortPractComponent,
    MergeSortPureComponent,
    LinkedListsComponent

  ],
  imports: [
    CommonModule,
    LinkedListsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class LinkedListsModule { }
