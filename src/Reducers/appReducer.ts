import { IBuscarCEP } from "../Actions/actionCreator";

export const appReducer = (estado: any = [], action: IBuscarCEP) => {
  if (action.type === "BUSCARCEP") {
    return [].concat(estado, action.resposta);;
  }
  return estado;
};
