import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotColdComponent } from './hot-cold/hot-cold.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

const routes: Routes = [
  {
    path: 'rxjs', component: RxjsComponent,
    children: [
      { path: 'unsubscribe', component: UnsubscribeComponent },
      { path: 'hot-cold', component: HotColdComponent },
      { path: 'subjects', component: SubjectsComponent },
      { path: '', redirectTo: 'unsubscribe', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
