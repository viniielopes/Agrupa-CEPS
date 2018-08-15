import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actionBUSCARCEP } from "./Actions/actionCreator";
import CardGroup from "./components/CardGroup";
import { IinformacoesCEP } from "./Interfaces/IinformacoesCEP";
import { IallReducers } from "./Interfaces/Reducers";

interface IProps extends IDispatchProps {
  CEP?: string;
  informacoesCEP: IinformacoesCEP[];
}

class App extends React.Component<IProps> {
  private campoCEPPesquisa: React.RefObject<
    HTMLInputElement
  > = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.clickBuscar = this.clickBuscar.bind(this);
  }

  public render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <p className="mb-0 font-weight-bold col-auto align-self-center">
              CEP:
            </p>
            <input
              type="text"
              className="form-control col-3"
              name="CEPPesquisa"
              maxLength={8}
              ref={this.campoCEPPesquisa}
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-3">
              <input
                type="button"
                value="Buscar"
                className="btn btn-danger btn-block py-2 my-3"
                onClick={this.clickBuscar}
              />
            </div>
          </div>
          <div className="row">
            <CardGroup informacoesCEP={this.props.informacoesCEP} />
          </div>
        </div>
      </div>
    );
  }

  private clickBuscar(evento: React.MouseEvent) {
    evento.preventDefault();
    const CEP = this.campoCEPPesquisa.current as HTMLInputElement;
    this.props.BUSCARCEP(parseInt(CEP.value, 0));
  }
}

const mapStateToProps = (state: IallReducers) => {
  return {
    informacoesCEP: state.appReducer
  };
};

interface IDispatchProps {
  BUSCARCEP: typeof actionBUSCARCEP;
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
  return {
    BUSCARCEP: bindActionCreators(actionBUSCARCEP, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
