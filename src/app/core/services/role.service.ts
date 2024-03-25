import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../type/role';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private listRoleUrl = 'http://localhost:3000/role'; // URL to web api

  constructor(private http: HttpClient) {}

  getRoleList(): Observable<any> {
    return this.http.get<any>(this.listRoleUrl);
  }

  getRoleDetail(id: any): Observable<Role> {
    const url = `${this.listRoleUrl}/${id}`;
    return this.http.get<any>(url).pipe();
  }

  addRole(role: Role): Observable<any> {
    return this.http
      .post<Role>(this.listRoleUrl, role, this.httpOptions)
      .pipe();
  }

  updateRole(role: Role, id: any): Observable<any> {
    const url = `${this.listRoleUrl}/${id}`;
    return this.http.put(url, role, this.httpOptions).pipe();
  }
}
