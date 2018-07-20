import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';


import * as usuariosActions from '../../store/actions';;
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean;
  error: '';
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new usuariosActions.CargarUsuarios());
    this.store.select('usuarios')
              .subscribe(data=>{{
      this.usuarios = data.users;
      this.loading = data.loading;
      this.error = data.error;
    }})
   
  }


}
