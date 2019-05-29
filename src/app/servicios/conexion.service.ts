import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Persona} from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private datosdepersonas= new Subject<Persona>();
  datosdepersonas$ = this.datosdepersonas.asObservable();

  constructor() {}

  MandarDatos(nuevo:Persona){ this.datosdepersonas.next(nuevo);}

}
