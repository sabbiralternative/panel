import { Fragment, useState } from "react";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import Alert from "../../UI/Alert/Alert";
// import ClosePanel from "../../modals/ClosePanel/ClosePanel";
import { Settings } from "../../../api";
import Deposit from "../../modals/Panels/Deposit";
import Toast from "../../modals/Panels/Toast";
import Withdraw from "../../modals/Panels/Withdraw";
import ChangePassword from "../../modals/Panels/ChangePassword";

const MyPanelSection = ({ data }) => {
  const [alert, setAlert] = useState(false);
  // const [closePanel, setClosePanel] = useState(false);
  const navigate = useNavigate();
  const [selectedDropdown, setSelectedDropdown] = useState(false);
  const [depositPayload, setDepositPayload] = useState(null);
  const [withdrawPayload, setWithdrawPayload] = useState(null);
  const [message, setMessage] = useState(null);
  const [changePasswordPayload, setChangePasswordPayload] = useState(null);

  const handleNavigate = (link, type, item) => {
    if (Settings.b2c) {
      if (type === "deposit") {
        setDepositPayload(item);
      } else if (type === "withdraw") {
        setWithdrawPayload(item);
      }
      setSelectedDropdown(null);
    } else {
      navigate(link);
    }
  };
  return (
    <div className="mat-mdc-tab-body-wrapper" style={{}}>
      {depositPayload && (
        <Deposit
          setDepositPayload={setDepositPayload}
          setMessage={setMessage}
          depositPayload={depositPayload}
        />
      )}
      {withdrawPayload && (
        <Withdraw
          setWithdrawPayload={setWithdrawPayload}
          setMessage={setMessage}
          withdrawPayload={withdrawPayload}
        />
      )}
      {changePasswordPayload && (
        <ChangePassword
          setChangePasswordPayload={setChangePasswordPayload}
          setMessage={setMessage}
          changePasswordPayload={changePasswordPayload}
        />
      )}
      {alert && (
        <Alert
          onOkayClick={() => {
            setChangePasswordPayload(alert);
            setAlert(false);
          }}
          setAlert={setAlert}
          title="Request Panel's Password"
          description="Are you sure you want to request for new panel password"
        />
      )}
      {message && (
        <Toast
          description={message?.message}
          setAlert={setMessage}
          success={message?.success}
          title={message?.title}
        />
      )}
      {/* {closePanel && <ClosePanel setClosePanel={setClosePanel} />} */}
      <div
        role="tabpanel"
        className="mat-mdc-tab-body ng-tns-c737557735-58 ng-star-inserted mat-mdc-tab-body-active mat-tab-body"
        id="mat-tab-content-2-0"
        aria-labelledby="mat-tab-label-2-0"
      >
        <div
          className="mat-mdc-tab-body-content ng-tns-c737557735-58 ng-trigger ng-trigger-translateTab"
          style={{ transform: "none" }}
        >
          <div className="filter-wrap ng-star-inserted" style={{}}>
            <div className="filter-section">
              <div className="search-id">
                <div
                  role="img"
                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                >
                  search
                </div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="ng-untouched ng-pristine ng-valid"
                />
              </div>
            </div>
          </div>
          <div
            role="main"
            className="md content-ltr hydrated ng-star-inserted ion-content"
            style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
          >
            <div
              className="id-list my-id"
              style={{
                background: "transparent",
                border: "none",
                height: "100%",
              }}
            >
              {data?.result?.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="ls-cont ng-star-inserted"
                    style={{ position: "relative" }}
                  >
                    <div className="list-wrap">
                      <div className="id-info">
                        <div className="ls-detail">
                          <img alt="ID Image" src={item?.img} />
                          <div className="ls-info">
                            <h4>{item?.site_url}</h4>
                            <p>{item?.username}</p>

                            {!Settings.b2c && (
                              <Fragment>
                                <p className="currency-type">
                                  Rate @ {item?.panel_rate}
                                </p>
                                <p className="rate-account-type">
                                  {" "}
                                  {item?.panel_rate_type} - {item?.panel_type}
                                </p>
                                <p className="currency-typee">
                                  {" "}
                                  Admin Link :{" "}
                                  <a
                                    onClick={() => window.open(item.admin_url)}
                                  >
                                    {item?.admin_url}
                                  </a>
                                </p>
                              </Fragment>
                            )}
                          </div>
                        </div>
                        <div className="ls-right">
                          <div className="btn-wrap">
                            <button
                              onClick={() =>
                                handleNavigate(
                                  `/panel-dw?id=${item?.id}&type=deposit`,
                                  "deposit",
                                  item,
                                )
                              }
                              aria-label="Deposit Button"
                              className="d-btn mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-accent mat-mdc-button-base"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
                              <span className="mdc-button__label"> D</span>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                            </button>
                            <button
                              onClick={() =>
                                handleNavigate(
                                  `/panel-dw?id=${item?.id}&type=withdraw`,
                                  "withdraw",
                                  item,
                                )
                              }
                              aria-label="Withdraw Button"
                              className="w-btn mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-accent mat-mdc-button-base"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
                              <span className="mdc-button__label"> W </span>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                            </button>
                            <button
                              onClick={() => setSelectedDropdown(item)}
                              aria-label="Menu Button"
                              className="mat-mdc-menu-trigger menu-btn mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"
                              aria-haspopup="menu"
                              aria-expanded="false"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple" />
                              <div
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                more_vert
                              </div>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {selectedDropdown && item?.id === selectedDropdown?.id && (
                      <Dropdown
                        // setClosePanel={setClosePanel}
                        setSelectedDropdown={setSelectedDropdown}
                        setAlert={setAlert}
                        selectedDropdown={selectedDropdown}
                        handleOpen={handleNavigate}
                        setChangePasswordPayload={setChangePasswordPayload}
                      />
                    )}
                  </div>
                );
              })}
              {data?.result?.length === 0 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "20px",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  <p>
                    {data?.result?.length >= 0 &&
                      `You don't have any ${Settings.b2c ? "ID" : "panel"}  yet`}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPanelSection;
