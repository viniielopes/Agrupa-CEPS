import * as React from "react";

interface Iprops {
  titulo: string;
  mensagem: string;
  show: boolean;
}

class ModalMSG extends React.Component<Iprops> {
  /**
   *
   */
  public componentWillMount() {
    if (this.props.show === true) {
      const elemento = document.querySelector(
        "#botaoExibi"
      ) as HTMLButtonElement;
      elemento.click();
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <button
          type="button"
          id="botaoExibi"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          hidden={true}>
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.titulo}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.mensagem}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalMSG;
