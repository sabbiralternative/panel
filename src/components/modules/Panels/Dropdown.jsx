import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";
import { useNavigate } from "react-router-dom";

const Dropdown = ({
  setSelectedDropdown,
  setAlert,
  // setClosePanel,
  selectedDropdown,
  handleOpen,
}) => {
  const ref = useRef();
  const navigate = useNavigate();
  useCloseModalClickOutside(ref, () => {
    setSelectedDropdown(null);
  });

  const handleNavigate = (link) => {
    setSelectedDropdown(null);
    navigate(link);
  };

  return (
    <div className="cdk-overlay-container" style={{ position: "absolute" }}>
      <div className="cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing" />
      <div
        ref={ref}
        className="cdk-overlay-connected-position-bounding-box"
        dir="ltr"
        style={{
          top: "60px",
          right: "0px",
          height: "596.059px",
          width: "954.731px",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <div
          id="cdk-overlay-12"
          className="cdk-overlay-pane"
          style={{ position: "static" }}
        >
          <div
            tabIndex={-1}
            role="menu"
            className="mat-mdc-menu-panel mat-mdc-elevation-specific ng-trigger ng-trigger-transformMenu ng-tns-c2786309385-114 mat-menu-before mat-menu-below ls-menu mat-elevation-z8 ng-star-inserted"
            id="mat-menu-panel-44"
            style={{ transformOrigin: "right top" }}
          >
            <div className="mat-mdc-menu-content ng-tns-c2786309385-114">
              <button
                onClick={() =>
                  handleOpen(
                    `/panel-dw?id=${selectedDropdown?.id}&type=deposit`,
                    "deposit",
                    selectedDropdown,
                  )
                }
                className="mat-mdc-menu-item mat-mdc-focus-indicator ng-tns-c2786309385-114 ng-star-inserted"
                role="menuitem"
                tabIndex={0}
                aria-disabled="false"
                style={{}}
              >
                <span className="mat-mdc-menu-item-text">Deposit</span>
                <div className="mat-ripple mat-mdc-menu-ripple" />
              </button>

              <button
                onClick={() =>
                  handleOpen(
                    `/panel-dw?id=${selectedDropdown?.id}&type=withdraw`,
                    "withdraw",
                    selectedDropdown,
                  )
                }
                className="mat-mdc-menu-item mat-mdc-focus-indicator ng-tns-c2786309385-114 ng-star-inserted"
                role="menuitem"
                tabIndex={0}
                aria-disabled="false"
                style={{}}
              >
                <span className="mat-mdc-menu-item-text">Withdraw</span>
                <div className="mat-ripple mat-mdc-menu-ripple" />
              </button>

              <button
                onClick={() =>
                  handleNavigate(
                    `/panel-transaction?id=${selectedDropdown?.id}`,
                  )
                }
                className="mat-mdc-menu-item mat-mdc-focus-indicator ng-tns-c2786309385-114"
                role="menuitem"
                tabIndex={0}
                aria-disabled="false"
              >
                <span className="mat-mdc-menu-item-text">View Transaction</span>
                <div className="mat-ripple mat-mdc-menu-ripple" />
              </button>
              <button
                onClick={() => {
                  setSelectedDropdown(null);
                  setAlert(true);
                }}
                className="mat-mdc-menu-item mat-mdc-focus-indicator ng-tns-c2786309385-114 ng-star-inserted"
                role="menuitem"
                tabIndex={0}
                aria-disabled="false"
                style={{}}
              >
                <span className="mat-mdc-menu-item-text">Change Password</span>
                <div className="mat-ripple mat-mdc-menu-ripple" />
              </button>

              {/* <button
                onClick={() => {
                  setSelectedDropdown(null);
                  setClosePanel(true);
                }}
                className="mat-mdc-menu-item mat-mdc-focus-indicator ng-tns-c2786309385-114 ng-star-inserted"
                role="menuitem"
                tabIndex={0}
                aria-disabled="false"
                style={{}}
              >
                <span className="mat-mdc-menu-item-text">Close Panel</span>
                <div className="mat-ripple mat-mdc-menu-ripple" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
