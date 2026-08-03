import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useIndex } from "../../../hooks";

const ChangePassword = ({
  setChangePasswordPayload,
  setMessage,
  changePasswordPayload,
}) => {
  const { mutateAsync } = useIndex();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const ref = useRef();

  useCloseModalClickOutside(ref, () => {
    setChangePasswordPayload(null);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      type: "change_password",
      site_url: changePasswordPayload?.site_url,
      site_id: changePasswordPayload?.site_id,
      password: password,
      confirm_password: confirmPassword,
      child_id: changePasswordPayload?.child_id,
      external: changePasswordPayload?.external,
    };

    const res = await mutateAsync(payload);

    setMessage({
      success: res?.success,
      ...res?.result,
    });
    setChangePasswordPayload(null);
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
                      <h2>Change Password</h2>
                      <button
                        onClick={() => setChangePasswordPayload(null)}
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
                        <div className="form-wrap">
                          <label>Password</label>
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            type="password"
                            className="mat-mdc-input-element cdk-text-field-autofill-monitored ng-touched ng-dirty ng-invalid"
                            id="mat-input-0"
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="form-wrap">
                          <label>Confirm Password</label>
                          <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                            type="password"
                            className="mat-mdc-input-element cdk-text-field-autofill-monitored ng-touched ng-dirty ng-invalid"
                            id="mat-input-0"
                            required
                            aria-required="true"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="submit"
                          className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label"> Submit</span>
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

export default ChangePassword;
