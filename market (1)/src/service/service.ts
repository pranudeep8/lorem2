import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({providedIn: 'root'})

export class Service {
  constructor(private http: HttpClient) { }

  getData(url, data) {
      return this.http.post(url,data,httpOptions)
  }
}
