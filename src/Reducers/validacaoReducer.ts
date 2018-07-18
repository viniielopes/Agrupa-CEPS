import { IVerificarInformacao } from "../Actions/actionCreator";

export const validacaoReducer = (
  estado: boolean = false,
  acao: IVerificarInformacao
) => {
  if (acao.type === "VERIFICAINFORMACAO") {
    return acao.resposta;
  }

  return estado;
};
