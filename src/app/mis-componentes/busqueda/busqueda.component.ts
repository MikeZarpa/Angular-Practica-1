import { Component, OnInit } from '@angular/core';
//import * as internal from 'stream';

@Component({
  selector: 'busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  contenidoBuscar:string="";
  mostrarResultado:boolean=false;
  respuesta:Producto[]=[{ID:"1",Nombre:"Harina",Precio:"100"},{ID:"5",Nombre:"CocaCola",Precio:"190"},{ID:"10",Nombre:"Pure Huertero",Precio:"60"}];
  
  constructor() { }

  ngOnInit(): void {
  }
  OnBuscar():void{
    this.mostrarResultado=true;
  }
}

export class Producto{
  ID:string;
  Nombre:string;
  Precio:string;
  constructor(ID:string,Nombre:string,Precio:string){
    this.ID=ID;
    this.Nombre=Nombre;
    this.Precio=Precio;
  }
}
