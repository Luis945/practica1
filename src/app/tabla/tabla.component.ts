import { Component, OnInit } from '@angular/core';
import {Persona} from '../modelos/persona';
import { ConexionService } from '../servicios/conexion.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  Personas:Array<Persona>;

  constructor(conecta: ConexionService) {

    this.Personas=new Array<Persona>();

    conecta.datosdepersonas$.subscribe( Persona => { this.Personas.push(Persona); });
  }

  ngOnInit() {
  }

}
