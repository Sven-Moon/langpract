import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinTreeComponent } from './bin-tree/bin-tree.component';
import { LinkedListsComponent } from './linked-lists/linked-lists.component';
import { RxjsComponent } from './rxjs/rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'rxjs', component: RxjsComponent,
    loadChildren: () => import('./rxjs/rxjs.module')
      .then((m) => m.RxjsModule)
  },
  {
    path: 'linked-lists', component: LinkedListsComponent,
    loadChildren: () => import('./linked-lists/linked-lists.module')
      .then(m => m.LinkedListsModule)
  },
  {
    path: 'bin-tree', component: BinTreeComponent,
    loadChildren: () => import('./bin-tree/bin-tree.module')
      .then(m => m.BinTreeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
