import { Injectable } from "../../../../node_modules/@angular/core";
import { Actions, Effect } from '@ngrx/effects';
import { UsuarioService } from "../../services/usuario.service";
import * as usuarioActions from '../actions/usuario.actions'
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects{
    constructor(private actions$ : Actions,
                private usuarioService: UsuarioService){}

    @Effect()
    cargarUsuario = this.actions$.ofType( usuarioActions.CARGAR_USUARIO)
            .pipe(
                switchMap((action: usuarioActions.CargarUsuario)=>{
                    return this.usuarioService.getUserById(action.id)
                            .pipe(
                                map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                                catchError( error => of(new usuarioActions.CargarUsuarioFail(error)))
                            );
                    })
                )
            
}