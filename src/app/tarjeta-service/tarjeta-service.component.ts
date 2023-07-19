import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaServiceComponent {
  private apiUrl = 'https://api.example.com'; // Reemplaza con la URL real de tu API

  constructor(private http: HttpClient) { }







  
  obtenerDatosTarjeta(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tarjeta`);
  }
}
