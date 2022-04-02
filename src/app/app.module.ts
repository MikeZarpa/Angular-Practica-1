import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './mis-componentes/busqueda/busqueda.component';
import { ProductoComponent } from './mis-componentes/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
