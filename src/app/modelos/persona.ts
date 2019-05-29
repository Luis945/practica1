export class Persona {
  Nombre:String; Apellido_P:String; Apellido_M:String; Edad:Number; Sexo:String; Correo:String; Emoji:String;
  Iconos:Array<String>= new Array<String>('fa-apple fa-lg','fa-beer fa-lg','fa-android fa-lg','fa-amazon fa-lg','fa-firefox fa-lg',
  'fa-youtube fa-lg','fa-whatsapp fa-lg','fa-spotify fa-lg','fa-twitch fa-lg','fa-steam fa-lg');

  constructor(nombre,apellidop,apellidom,edad,sexo,correo){
      this.Nombre=nombre;
      this.Apellido_P=apellidop;
      this.Apellido_M=apellidom;
      this.Edad=parseInt(edad);
      this.Sexo=sexo;
      this.Correo=correo;
      this.asignarEmoji();
    }
    asignarEmoji(){ this.Emoji= this.Iconos[Math.floor(Math.random() * 10)];}
}
