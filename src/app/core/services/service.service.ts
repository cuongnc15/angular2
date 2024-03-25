import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Service } from '../type/service';

@Injectable({
  providedIn: 'root',
})
export class ServicePack {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private listServiceUrl = 'http://localhost:3000/services'; // URL to web api

  constructor(private http: HttpClient) {}

  getListService(): Observable<any> {
    return this.http.get<any>(this.listServiceUrl);
  }

  getService(id: any): Observable<Service> {
    const url = `${this.listServiceUrl}/${id}`;
    return this.http.get<any>(url).pipe();
  }

  addService(service: Service): Observable<Service> {
    return this.http
      .post<Service>(this.listServiceUrl, service, this.httpOptions)
      .pipe();
  }

  updateService(service: Service, id: number): Observable<any> {
    const url = `${this.listServiceUrl}/${id}`;
    return this.http.put(url, service, this.httpOptions).pipe();
  }
}
