import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artless } from '../../model/artless';

@Injectable({
  providedIn: 'root'
})
export class HttpArtlessService {
  URL: string = 'http://localhost:8889/artless';
  
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Artless[]> {
    return this.http.get<Artless[]>(`${this.URL}/all`, this.httpHeader);
  }

  getFramework(id: any): Observable<Artless[]> {
    return this.http.get<Artless[]>(`${this.URL}/framework/` + id, this.httpHeader);
  }

  getName(id: any): Observable<Artless[]> {
    return this.http.get<Artless[]>(`${this.URL}/name/` + id, this.httpHeader);
  }
}
