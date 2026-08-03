import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useIndex } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export default function CreateIdModal({
  setCreateIdModal,
  setAlert,
  createIdModal,
  refetchMyPanel,
}) {
  const navigate = useNavigate();
  const { mutateAsync } = useIndex();
  const [user, setUser] = useState("");
  const ref = useRef();

  useCloseModalClickOutside(ref, () => {
    setCreateIdModal(false);
  });

  const handleCreateIdSuccess = async (e) => {
    e.preventDefault();
    const payload = {
      type: "create_id",
      username: user,
      site: createIdModal?.site_url,
      create_direct: createIdModal?.create_direct,
    };
    const res = await mutateAsync(payload);

    setAlert({
      success: res?.success,
      ...res?.result,
    });
    if (createIdModal?.create_direct && res?.success) {
      refetchMyPanel();
      navigate("/panels?tab=0");
    }
    setCreateIdModal(false);
  };

  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing" />
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "center" }}
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
                      <h2>Create ID</h2>
                      <button
                        onClick={() => setCreateIdModal(false)}
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
                      onSubmit={handleCreateIdSuccess}
                      className="ng-touched ng-dirty ng-invalid"
                    >
                      <div className="modal-body">
                        <div className="card-wrap">
                          <div className="avl-bal show-bal">
                            <img src={createIdModal?.img} alt="" />
                            <span className="mat-label">
                              {createIdModal?.site_name}
                            </span>
                            <p className="ng-star-inserted">
                              {" "}
                              {createIdModal?.site_url}
                            </p>
                          </div>
                        </div>
                        <div className="form-wrap">
                          <label>Username *</label>
                          <input
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Enter username"
                            type="text"
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
                          <span className="mdc-button__label">
                            Create Instant ID
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
}
