import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8082/api/employees';
  constructor(private http:HttpClient){}

getAllEmployees(): Observable<Employee[]>{
  return this.http.get<Employee[]>(this.baseUrl,{headers: this.getHeaders()
  });
}

  getEmployeeById(id: number) : Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`, {headers : this.getHeaders()});
  } 

  createEmployee(employee: Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.baseUrl,employee,{headers: this.getHeaders()});
  }

  updateEmployee(id:number,employee :Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/${id}`,employee,{headers: this.getHeaders()});
  }

  deleteEmployee(id:number, ) : Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`,{headers: this.getHeaders()});
  }

private getHeaders(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json'
  });
}
}