import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private url: string = "http://localhost:8089/inventario-back"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${this.url}/propietarios`);
  }

  create(propietario: any) {
    
    return this.http.post<any>(`${this.url}/save-propietario`, propietario);
  }

}
