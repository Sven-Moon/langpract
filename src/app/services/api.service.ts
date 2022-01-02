import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
    s
  constructor(
    private http: HttpClient
  ) { }

  public getSomeApi(url): Observable<any> {
    console.log('doing it');

    return this.http.get(url)
  }
}
