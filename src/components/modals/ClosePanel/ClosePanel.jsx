import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import toast from "react-hot-toast";

const ClosePanel = ({ setClosePanel }) => {
  const ref = useRef();
  useCloseModalClickOutside(ref, () => {
    setClosePanel(false);
  });
  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing" />
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          ref={ref}
          id="cdk-overlay-29"
          className="cdk-overlay-pane change-password-dialog"
          style={{
            width: "100%",
            maxWidth: "500px",
            position: "static",
            marginBottom: "0px",
          }}
        >
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
          <div
            tabIndex={-1}
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div className="ng-star-inserted">
                  <div className="create-id-dialog">
                    <div className="modal-header">
                      <h2>Close Panel</h2>
                      <button
                        onClick={() => setClosePanel(false)}
                        className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        type="button"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                        <div
                          role="img"
                          aria-hidden="true"
                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                          data-mat-icon-type="font"
                        >
                          {" "}
                          close{" "}
                        </div>
                        <span className="mdc-button__label" />
                        <span className="mat-mdc-focus-indicator" />
                        <span className="mat-mdc-button-touch-target" />
                        <span className="mat-ripple mat-mdc-button-ripple" />
                      </button>
                    </div>
                    <form
                      noValidate
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <div className="modal-body">
                        <div className="card-wrap">
                          <div className="avl-bal show-bal">
                            <img
                              alt=""
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                            />
                            <p>Lotus Book</p>
                            <p>lotusbook.io</p>
                          </div>
                        </div>
                        <div className="exp-list-type closeid-text">
                          <p />
                          <ul>
                            <li>
                              Please make sure that you do not have any Active
                              Bets
                            </li>
                            <li>
                              On successful closure remaining amount will be
                              added to your Wallet
                            </li>
                          </ul>
                          <p />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          onClick={() => {
                            setClosePanel(false);
                            toast.success("Close Panel Request Placed");
                          }}
                          type="button"
                          className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label">Confirm</span>
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default ClosePanel;
