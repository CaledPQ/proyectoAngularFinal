import { Component } from '@angular/core';
import { FrasesService } from '../frases.service';
@Component({
  selector: 'app-jokeschild',
  templateUrl: './jokeschild.component.html',
  styleUrls: ['./jokeschild.component.css']
})
export class JokeschildComponent {
  informacionRecibida:any 
  constructor(private variableServicio:FrasesService){
  variableServicio.obtenerFraseRamdon().subscribe((data)=>{
    this.informacionRecibida=data
  })
  }

  refrescarFrase(){
    this.variableServicio.obtenerFraseRamdon().subscribe((data)=>{
      this.informacionRecibida=data
    })
  }
}
