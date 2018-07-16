import { Dispatch } from "redux";

export interface IBuscarCEP {
  type: string;
  numeroCEP: number;
  resposta: any;
}

enum BUSCARCEP {
  type = "BUSCARCEP"
}

export const actionBUSCARCEP = (CEP: number) => {
  return (dispatch: Dispatch) => {
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
      .then(valores => valores.json())
      .then(valor => {
        dispatch({ type: BUSCARCEP.type, numeroCEP: CEP, resposta: valor });
      });
  };
};
