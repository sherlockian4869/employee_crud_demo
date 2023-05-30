import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(empData: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', empData);
  }

  updateEmployee(id: number, empData: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, empData);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(empId: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${empId}`);
  }
}
