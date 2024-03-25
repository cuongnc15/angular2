import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agency } from '../type/agency';

@Injectable({
  providedIn: 'root',
})
export class AgencyService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private listAgencyUrl = 'http://localhost:3000/agency'; // URL to web api

  constructor(private http: HttpClient) {}

  getAgencyList(): Observable<any> {
    return this.http.get<any>(this.listAgencyUrl);
  }

  getAgencyDetail(id: any): Observable<Agency> {
    const url = `${this.listAgencyUrl}/${id}`;
    return this.http.get<any>(url).pipe();
  }

  addAgency(Agency: Agency): Observable<any> {
    return this.http
      .post<Agency>(this.listAgencyUrl, Agency, this.httpOptions)
      .pipe();
  }

  updateAgency(Agency: Agency, id: any): Observable<any> {
    const url = `${this.listAgencyUrl}/${id}`;
    return this.http.put(url, Agency, this.httpOptions).pipe();
  }
}
