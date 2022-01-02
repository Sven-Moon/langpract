import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringsService {

  constructor() { }

  public isSubstring(str1: string, str2: string): boolean {
    let regex = new RegExp(str2, 'gi')
    return regex.test(str2)
  }
}
