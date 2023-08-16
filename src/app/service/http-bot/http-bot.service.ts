import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Message {
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpBotService {
  URL: string = 'http://localhost:8885/';
  
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'text/html' }),
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.URL}`, this.httpHeader);
  }

  postMessage(message: Message): Observable<any> {
    return this.http.post<Message>(`${this.URL}`, message, this.httpHeader);
  }
}
