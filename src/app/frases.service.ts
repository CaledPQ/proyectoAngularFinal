import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrasesService {

  constructor(private http:HttpClient) { }



  obtenerFraseRamdon(){
    const respuesta=this.http.get("https://api.quotable.io/random")
    return respuesta
  }






}
