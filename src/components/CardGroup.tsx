import * as React from "react";
import { Validacao } from "../Helpers/validacao";
import { IinformacoesCEP } from "../Interfaces/IinformacoesCEP";
import Card from "./Card";
import ModalMSG from "./ModalMSG";

interface Iprops {
  informacoesCEP: IinformacoesCEP[];
}

interface IState {
  showMSG: boolean;
}

class CardGroup extends React.PureComponent<Iprops, IState> {
  private Valida = new Validacao();
  /**
   *
   */
  constructor(props: Iprops) {
    super(props);
    this.state = {
      showMSG: false
    };

    this.render = this.render.bind(this);
  }

  public render() {
    return (
      <div className="card-group col-12">
        {this.props.informacoesCEP.map(informacoes => (
          <Card informacoesCEP={informacoes} key={informacoes.cep} />
        ))}

        {
          <ModalMSG
            titulo="Atenção"
            mensagem="CEP Não encontrado!"
            key={Math.random()}
            show={this.Valida.validar(
              this.props.informacoesCEP[this.props.informacoesCEP.length - 1]
            )}
          />
        }
      </div>
    );
  }
}

export default CardGroup;
