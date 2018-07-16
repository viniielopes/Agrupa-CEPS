import * as React from "react";
import { IinformacoesCEP } from "../Interfaces/IinformacoesCEP";
import Card from "./Card";

interface Iprops {
  informacoesCEP: IinformacoesCEP[];
}

export default class CardGroup extends React.Component<Iprops, {}> {
  /**
   *
   */
  constructor(props: Iprops) {
    super(props);
  }

  public render() {
    return (
      <div className="card-group col-12">
        {this.props.informacoesCEP.map(informacoes => {
          return <Card informacoesCEP={informacoes} key={informacoes.cep} />;
        })}
      </div>
    );
  }  
}
