import { Component, OnInit } from '@angular/core';
import {Persona} from '../modelos/persona';
import { ConexionService } from '../servicios/conexion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  Nombre:String = ''; Apellido_P:String = ''; Apellido_M:String = ''; Edad:String = ''; Sexo:String = ''; Correo:String = '';
  constructor(private conecta: ConexionService) {  }

  ngOnInit() {}

  agregarPersona(){
    this.conecta.MandarDatos(new Persona(this.Nombre,this.Apellido_P,this.Apellido_M,this.Edad,this.Sexo,this.Correo));

    this.Nombre = ''; this.Apellido_P = ''; this.Apellido_M = ''; this.Edad = ''; this.Sexo = ''; this.Correo = '';

  }
}
