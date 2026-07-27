import { useState } from "react";
import useWithdrawBreakdown from "../../../hooks/withdrawBreakdown";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import { useIndex } from "../../../hooks";

const Withdraw = ({ setWithdrawPayload, setMessage, depositPayload }) => {
  const [amount, setAmount] = useState();
  const { data } = useWithdrawBreakdown();
  const { mutateAsync } = useIndex();

  const closeModal = () => {
    setWithdrawPayload(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      type: "withdraw_panel",
      site_url: depositPayload?.site_url,
      site_id: depositPayload?.site_id,
      amount: amount,
    };
    const res = await mutateAsync(payload);
    setMessage({
      success: res?.success,
      ...res?.result,
    });
    setWithdrawPayload(null);
  };

  return (
    <div className="cdk-overlay-container" style={{ zIndex: 2000 }}>
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-3"
          className="cdk-overlay-pane dw-dialog"
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
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-2"
            role="dialog"
            aria-modal="true"
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <ModalWrapper setModal={setWithdrawPayload}>
                  <div className="ng-star-inserted">
                    <div className="transaction-modal ng-star-inserted">
                      <div className="modal-header">
                        <h2>Withdraw</h2>
                        <button
                          onClick={closeModal}
                          className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          type="button"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <div
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            close{" "}
                          </div>
                          <span className="mdc-button__label" />
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                          <span className="mat-ripple mat-mdc-button-ripple" />
                        </button>
                      </div>
                      <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="ng-pristine ng-invalid ng-touched"
                      >
                        <div className="modal-body">
                          <div className="card-wrap">
                            <div className="avl-bal show-bal">
                              <div>Available Balance</div>
                              <p>{data?.mainWallet}</p>
                            </div>
                          </div>
                          <div className="form-wrap">
                            <label>Withdraw Coins</label>
                            <input
                              onChange={(e) => setAmount(e.target.value)}
                              placeholder="Enter Coins"
                              type="number"
                              className="ng-pristine ng-invalid ng-touched"
                            />
                            <p className="note-message ng-star-inserted">
                              Minimum withdrawal amount is{" "}
                              {data?.minimumWithdraw} coins
                            </p>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                            <span className="mdc-button__label">
                              {" "}
                              Withdraw Coins
                            </span>
                            <span className="mat-mdc-focus-indicator" />
                            <span className="mat-mdc-button-touch-target" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </ModalWrapper>
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
    </div>
  );
};

export default Withdraw;
