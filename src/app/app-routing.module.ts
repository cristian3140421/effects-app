import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ListaComponent } from './usuarios/lista/lista.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'home' , component:ListaComponent},
  { path:'usuario/:id' , component:UsuarioComponent},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
