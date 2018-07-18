import { Dispatch } from "redux";
// import { IinformacoesCEP } from "../Interfaces/IinformacoesCEP";

export interface IVerificarInformacao {
  type: string;
  resposta: boolean;
}

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
        dispatch({
          numeroCEP: CEP,
          resposta: valor,
          type: BUSCARCEP.type
        });
      });
  };
};