import { Component } from '@angular/core';
import { ParquesService } from 'src/app/services/parques.service';
import { Parque } from 'src/app/model/parque';


@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage {

  parque: Parque;
  mensaje: string;

  constructor(private parquesService: ParquesService) {
    this.parque = {
      nombre: '',
      direccion: '',
      posicion: { lat: null, lon: null }
    };
  }

  guardar() {
    this.parquesService.post(this.parque).subscribe(
      respuesta => this.mensaje = 'Parque guardado correctamente',
      error => this.mensaje = 'Error al guardar el parque'
    );
  }
}
