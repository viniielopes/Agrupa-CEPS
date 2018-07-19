import { IinformacoesCEP } from "../Interfaces/IinformacoesCEP";

export class Validacao {
  public validar(informacoes: IinformacoesCEP): boolean {
    let retorno: boolean = false;
    if (informacoes !== undefined) {
      if ("erro" in informacoes) {
        retorno = true;
      } else {
        retorno = false;
      }
    }

    return retorno;
  }
}
