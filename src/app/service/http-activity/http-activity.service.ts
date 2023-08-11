import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../../model/activity';

@Injectable({
  providedIn: 'root'
})
export class HttpActivityService {
  URL: string = 'http://api.stomach.com.br:8889/activity';
  
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.URL}/all`).pipe(
      tap((Activity) => console.log('Activity fetched!')),
      catchError(this.handleError<Activity[]>('Get activity', []))
    );
  }

  get(id: any): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.URL}/` + id).pipe(
      tap((_) => console.log(`Activity fetched: ${id}`)),
      catchError(this.handleError<Activity[]>(`Get activity id=${id}`))
    );
  }

  /*
  handleError<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<any[]>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
