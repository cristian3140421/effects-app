import { Injectable } from "../../../../node_modules/@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects{

    constructor(
        private actions$: Actions,
        public usuariosServices: UsuarioService
    ){}
    
    @Effect()
    cargarUsuarios$ = this.actions$.ofType( usuariosActions.CARGAR_USUARIOS )
    .pipe(
        switchMap(() => this.usuariosServices.getUser()
        .pipe(
            map( users => new usuariosActions.CargarUsuariosSuccess(users)),
            catchError( error => of(new usuariosActions.CargarUsuariosFail(error)))
        )
    )
    );
}