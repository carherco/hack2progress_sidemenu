import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Parque } from 'src/app/model/parque';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ParquesService {

  private url = environment.api_url;
  private parqueSeleccionado: Parque;

  constructor(private http: HttpClient) { }

  get(): Observable<Parque[]> {
    return this.http.get<Parque[]>(this.url);
  }

  post(parque: Parque) {
    return this.http.post(this.url, parque);
  }

  delete(parque: Parque) {
    return this.http.delete(this.url + '/' + parque._id);
  }

  setParqueSeleccionado(parque: Parque) {
    this.parqueSeleccionado = parque;
  }

  getParqueSeleccionado(): Parque {
    return this.parqueSeleccionado;
  }


}
