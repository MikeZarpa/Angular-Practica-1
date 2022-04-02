import { Component, Input, OnInit } from '@angular/core';
import {Producto} from '../busqueda/busqueda.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() item!:Producto;
  constructor() { }

  ngOnInit(): void {
  }

}
