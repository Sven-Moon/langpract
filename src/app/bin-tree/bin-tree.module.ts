import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinTreeRoutingModule } from './bin-tree.routing';
import { PractComponent } from './pract/pract.component';
import { RouterModule } from '@angular/router';
import { BinTreeComponent } from './bin-tree.component';


@NgModule({
  declarations: [
    PractComponent,
    BinTreeComponent,

  ],
  imports: [
    CommonModule,
    BinTreeRoutingModule,
    RouterModule
  ]
})
export class BinTreeModule { }
