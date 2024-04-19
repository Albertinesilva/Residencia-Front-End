import { createReducer, on } from "@ngrx/store";
import {incrementar, decrementar, multiplicar } from "./contador.actions";

const estadoInicial = 10;

export const contadorReducer = createReducer(
    estadoInicial,
    on(incrementar, (estado, action) => estado + action.valor),
    on(decrementar, (estado, action) => estado - action.valor),
    on(multiplicar, (estado, action) => estado * action.valor)
);

// //sintaxe alternativa
// export function contadorReducer(estado = estadoInicial, action:ContadorActions) {
//     if(action.type === '[Contador]Incrementar') {
//         return estado + action.valor;
//     }
//     return estado;
// }
