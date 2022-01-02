import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinTreeComponent } from './bin-tree.component';
import { BtModelComponent } from './bt-model/bt-model.component';
import { PractComponent } from './pract/pract.component';

const routes: Routes = [
  {
    path: 'bin-tree', component: BinTreeComponent,
    children: [
      { path: 'model', component: BtModelComponent },
      { path: 'practice', component: PractComponent },
      { path: '', redirectTo: 'practice', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BinTreeRoutingModule { }
