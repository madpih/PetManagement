import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet';


@Injectable({
  providedIn: 'root'
})

export class PetService {

private baseURL='http://localhost:8080/pets';
constructor(private httpClient: HttpClient) { }

getPetsList(): Observable<Pet[]>{
  return this.httpClient.get<Pet[]>(`${this.baseURL}/all`);
  }

addPet(pet: Pet): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}/add`, pet);
  }

getPetById(id:number):Observable<Pet>{
  return this.httpClient.get<Pet>(`${this.baseURL}/find/${id}`);
}

updatePet(id: number, pet: Pet): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/update/${id}`, pet);
}
}


