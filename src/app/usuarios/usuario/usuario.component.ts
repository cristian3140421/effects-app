import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { CargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario = null;
  loading: boolean;
  error: '';

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params
        .subscribe(params=>{
          const id = params['id'];
          this.store.dispatch(new CargarUsuario(id));
        });

    this.store.select('usuario').subscribe( usuario =>{
      this.user = usuario.user;
      this.loading = usuario.loading;
      this.error = usuario.error;
    })
  }

}
