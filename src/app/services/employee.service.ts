import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmoployee(data: any): Observable <any> {
    return this._http.post(`http://localhost:3000/Employees` , data)
  }
  UpdateEmoployee(id: number, data: any): Observable <any> {
    return this._http.put(`http://localhost:3000/Employees/${id}` , data)
  }
  getEmoployeeList(): Observable <any> {
    return this._http.get(`http://localhost:3000/Employees` )
  }
  deleteEmployee(id: number): Observable <any> {
    return this._http.delete(`http://localhost:3000/Employees/${id}`);
  }
}

