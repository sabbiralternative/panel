import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useBankAccountQuery } from "../../../hooks/bankAccount";
import { useDepositBreakdownQuery } from "../../../hooks/depositBreakdown";
import { useIndex } from "../../../hooks";

const Deposit = ({ setDepositPayload, setMessage, depositPayload }) => {
  const { mutateAsync } = useIndex();
  const [amount, setAmount] = useState("");
  const ref = useRef();
  const { data: bankAccount } = useBankAccountQuery({
    type: "availableCoins",
  });

  const { data: depositBreakdown } = useDepositBreakdownQuery({
    amount: 100,
  });

  useCloseModalClickOutside(ref, () => {
    setDepositPayload(null);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      type: "deposit_panel",
      site_url: depositPayload?.site_url,
      site_id: depositPayload?.site_id,
      amount: amount,
      child_id: depositPayload?.child_id,
    };

    const res = await mutateAsync(payload);

    setMessage({
      success: res?.success,
      ...res?.result,
    });
    setDepositPayload(null);
  };

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
          id="cdk-overlay-2"
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
            tabIndex={-1}
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="dwModal"
            role="dialog"
            aria-modal="true"
            style={{ "--mat-dialog-transition-duration": "150ms" }}
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div className="ng-star-inserted">
                  <div className="transaction-modal ng-star-inserted">
                    <div className="modal-header">
                      <h2>Deposit</h2>
                      <button
                        onClick={() => setDepositPayload(null)}
                        className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                        <div
                          style={{ color: "white" }}
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
                      className="ng-touched ng-dirty ng-invalid"
                    >
                      <div className="modal-body">
                        <div className="card-wrap">
                          <div className="avl-bal show-bal">
                            <span className="mat-label">Available Balance</span>
                            <p className="ng-star-inserted">
                              {" "}
                              {bankAccount?.availableBalance}
                            </p>
                          </div>
                        </div>
                        <div className="form-wrap">
                          <label>Deposit Coins</label>
                          <input
                            onChange={(e) =>
                              setAmount(
                                e.target.value <= 10000000
                                  ? e.target.value
                                  : 10000000,
                              )
                            }
                            placeholder="Enter Coins"
                            type="number"
                            className="mat-mdc-input-element cdk-text-field-autofill-monitored ng-touched ng-dirty ng-invalid"
                            id="mat-input-0"
                            required
                            aria-required="true"
                          />
                          <p className="note-message ng-star-inserted">
                            Minimum deposit amount is{" "}
                            {depositBreakdown?.minimumDeposit} coins
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          disabled={
                            !amount || amount < depositBreakdown?.minimumDeposit
                          }
                          type="submit"
                          className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label">
                            Make Payment
                          </span>
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

export default Deposit;
