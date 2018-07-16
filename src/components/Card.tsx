import * as React from "react";
import { IinformacoesCEP } from "../Interfaces/IinformacoesCEP";

interface Iprops {
  informacoesCEP: IinformacoesCEP;
}
export default class Card extends React.Component<Iprops> {
  /**
   *
   */
  constructor(props: Iprops) {
    super(props);
  }

  public render(): JSX.Element {
    if (this.props.informacoesCEP.bairro !== undefined) {
      return (
        <div className="col-auto col-lg-4 my-1">
          <div className="card">
            <div className="card-header">
              {this.props.informacoesCEP.bairro}
            </div>
            <div className="card-body">
              <p className="card-text">{this.props.informacoesCEP.cep}</p>
              <p className="card-text">{this.props.informacoesCEP.ibge}</p>
              <p className="card-text">
                {this.props.informacoesCEP.logradouro}
              </p>
              <p className="card-text">{this.props.informacoesCEP.uf}</p>
            </div>
            <div className="card-footer">
              {this.props.informacoesCEP.localidade}
            </div>
          </div>
        </div>
      );
    } else {
      return <p />;
    }
  }
}
