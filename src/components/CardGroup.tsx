import * as React from "react";
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

        {this.validar(
          this.props.informacoesCEP[this.props.informacoesCEP.length - 1]
        ) === true ? (
          <ModalMSG
            titulo="Atenção"
            mensagem="CEP Não encontrado!"
            key={Math.random()}
            show={this.state.showMSG}
          />
        ) : null}
      </div>
    );
  }

  private validar(informacoes: IinformacoesCEP): boolean {
    let retorno: boolean = false;
    if (this.props.informacoesCEP.length !== 0) {
      if ("erro" in informacoes) {
        retorno = true;
      } else {
        retorno = false;
      }
    }
    retorno === true
      ? this.setState(() => ({
          showMSG: true
        }))
      : this.setState(() => ({
          showMSG: false
        }));

    return retorno;
  }
}

export default CardGroup;
