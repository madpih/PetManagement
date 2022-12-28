import { Injectable } from '@angular/core';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseURL='http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  public loginUser(person: Person):Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}/login`, person);
  }

public registerPerson(person: Person):Observable<any>{
  return this.httpClient.post<any>(`${this.baseURL}/signup`, person);

}
}
