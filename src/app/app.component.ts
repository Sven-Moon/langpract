import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { StringsService } from './services/strings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'langPract';
  counter: number = 0;
  test
  thisInput
  thisInput2

  constructor(
    private strings: StringsService
  ) { }


  public splitPairs(text: string): string[] {
    console.log('text.length % 2 = ' + text.length % 2);
    return ['jlkj;l']

    // const final = text.length % 2 !== 0 ? `${text}_` : text;
    // return final.split(/(?=(?:..)*$)/)
  }

  public submit(str1, str2) {
    console.log('str1: ' + str1);
    console.log('str2: ' + str2);

    console.log(this.strings.isSubstring(str1, str2));

  }

}
