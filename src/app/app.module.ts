
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RandPersonComponent } from './rand-person/rand-person.component';
import { StacksComponent } from './stacks/stacks.component';
import { SearchComponent } from './search/search.component';
import { SearchRotatedComponent } from './search/search-rotated/search-rotated.component';
import { ObsComponent } from './rxjs/obs/obs.component';
import { Oop1Component } from './oop1/oop1.component';
import { RouterModule } from '@angular/router';
import { LinkedListsModule } from './linked-lists/linked-lists.module'
import { RxjsModule } from './rxjs/rxjs.module';
import { BinTreeModule } from './bin-tree/bin-tree.module';

@NgModule({
  declarations: [
    AppComponent,
    RandPersonComponent,
    StacksComponent,
    SearchComponent,
    SearchRotatedComponent,
    ObsComponent,
    Oop1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    LinkedListsModule,
    RxjsModule,
    BinTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
