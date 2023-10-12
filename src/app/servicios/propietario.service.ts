import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private url: string = "http://34.23.138.216:8080/inventario-back"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`${this.url}/propietarios`);
  }

  create(propietario: any) {
    
    return this.http.post<any>(`${this.url}/save-propietario`, propietario);
  }

  edit(id:number,propietario:any){
    return this.http.put<any>(`${this.url}/edit-propietario/${id}`,propietario);
  }

  findById(id:number){
    return this.http.get<any>(`${this.url}/propietario/${id}`);
  }

  delete(id:number){
    return this.http.delete<any>(`${this.url}/delete-vehiculo/${id}`);
  }


}
