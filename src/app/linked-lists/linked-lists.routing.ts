import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { LinkedListsComponent } from './linked-lists.component';
import { LlPractComponent } from './ll-pract/ll-pract.component';

const routes: Routes = [

  {
    path: 'linked-lists', component: LinkedListsComponent,
    children: [
      { path: 'practice', component: LlPractComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedListsRoutingModule { }
