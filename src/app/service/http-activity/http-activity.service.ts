import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../../model/activity';

@Injectable({
  providedIn: 'root'
})
export class HttpActivityService {
  //URL: string = 'http://api.stomach.com.br:8889/activity';
  URL: string = 'http://localhost:8889/activity';

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.URL}/all`, this.httpHeader);
  }

  getFramework(id: any): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.URL}/framework/` + id, this.httpHeader);
  }

  getName(id: any): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.URL}/name/` + id, this.httpHeader);
  }

}
