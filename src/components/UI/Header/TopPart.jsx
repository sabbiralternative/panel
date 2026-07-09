import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageProvider";
import "./TopPart.css";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "../../../api";
import {
  setShowDepositModal,
  setShowLoginModal,
  setShowRegisterModal,
  setShowSidebar,
} from "../../../redux/features/global/globalSlice";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import images from "../../../assets/images";
import { IoDocumentText } from "react-icons/io5";
import useBalance from "../../../hooks/balance";
import { Fragment } from "react";
import toast from "react-hot-toast";
import { useLogo } from "../../../context/ApiProvider";

const TopPart = ({ setShowLanguage, setShowWithdrawModal }) => {
  const { logo } = useLogo();
  const { token } = useSelector((state) => state.auth);
  const { data } = useBalance();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { valueByLanguage } = useLanguage();
  const language = localStorage.getItem("language");
  const dispatch = useDispatch();

  // const openWhatsapp = () => {
  //   if (Settings?.whatsapplink) {
  //     window.open(Settings?.whatsapplink, "_blank");
  //   }
  // };
  return (
    <div
      className="page-header not-loggedIn"
      style={{
        flexDirection: "column",
        backgroundImage: 'url("/assets/wallet-img.svg")',
      }}
    >
      <div style={{ width: "100%" }}>
        <div className="header-wrapper top-header" style={{ padding: "10px" }}>
          <div className="logo">
            <div
              onClick={() => dispatch(setShowSidebar(true))}
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
              aria-hidden="true"
              data-mat-icon-type="font"
            >
              menu
            </div>
          </div>
          <div className="header-right-cont" style={{ marginRight: "0px" }}>
            <div
              className="gSearch_v2 ng-star-inserted"
              style={{ visibility: "hidden" }}
            >
              <button
                color="primary"
                aria-label="Global search"
                className="global-btn mdc-icon-button mat-mdc-icon-button mat-primary mat-mdc-button-base"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple" />
                <div
                  role="img"
                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                >
                  search
                </div>
                <span className="mat-mdc-focus-indicator" />
                <span className="mat-mdc-button-touch-target" />
              </button>
            </div>

            <div className="not-loggedIn ng-star-inserted">
              {token ? (
                <div
                  style={{
                    display: "flex",
                    fontSize: "10px",
                    gap: "0px 10px",
                    marginRight: "2px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                    }}
                  >
                    <p style={{ color: "white" }}>{data?.availBalance}</p>
                    <p style={{ color: "white" }}>{data?.deductedExposure}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <p style={{ color: "white" }}>Bal</p>
                    <p style={{ color: "white" }}>Exp</p>
                  </div>
                </div>
              ) : (
                <Fragment>
                  <button className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                    <span className="mdc-button__label">
                      <span onClick={() => dispatch(setShowLoginModal(true))}>
                        {languageValue(valueByLanguage, LanguageKey.LOGIN)}
                      </span>{" "}
                      {Settings.registration && (
                        <Fragment>
                          |{" "}
                          <span
                            onClick={() => dispatch(setShowRegisterModal(true))}
                          >
                            Signup
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span className="mat-mdc-focus-indicator" />
                    <span className="mat-mdc-button-touch-target" />
                  </button>
                  {/* {Settings.registration_whatsapp && Settings?.whatsapplink && (
                    <button
                      onClick={openWhatsapp}
                      className="btn dark-outlined-btn demo-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                      <span className="mdc-button__label">Get ID</span>
                      <span className="mat-mdc-focus-indicator" />
                      <span className="mat-mdc-button-touch-target" />
                    </button>
                  )} */}
                </Fragment>
              )}

              {Settings.language && pathname !== "/passbook" && (
                <div
                  onClick={() => setShowLanguage((prev) => !prev)}
                  style={{
                    position: "static",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                    cursor: "pointer",
                  }}
                  className="notranslate selected-lang ng-star-inserted"
                >
                  <img style={{ height: "20px" }} src={images.globe} alt="" />
                  <span> {language || "EN"}</span>
                </div>
              )}
              {pathname === "/passbook" && (
                <div
                  onClick={() => navigate("/profit-loss")}
                  style={{
                    position: "static",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                    cursor: "pointer",
                  }}
                  className="notranslate selected-lang ng-star-inserted"
                >
                  <IoDocumentText size={27} />
                </div>
              )}
            </div>

            <p className="notranslate selected-lang ng-star-inserted">En</p>
          </div>
        </div>
      </div>
      <div className="wallet-wrapper not-loggedIn">
        <div className="wallet-grid">
          <div
            onClick={() => {
              if (token) {
                dispatch(setShowDepositModal(true));
              } else {
                toast.error("Please login to continue");
              }
            }}
            className="wa-item"
          >
            <div className="deposit-wrap">
              <p>Deposit</p>
              <div className="img-wrap">
                <img alt="" src="/assets/arrow-up.svg" />
              </div>
            </div>
          </div>
          <div className="wa-item">
            <div className="wallet-balance">
              <div className="logo-wrap">
                <img alt="logo" className="logo ng-star-inserted" src={logo} />
              </div>
              <div
                className="balance-info notranslate"
                style={{ flexDirection: "column" }}
              >
                <h3>Wallet Balance</h3>
                <p>
                  <img
                    alt="logo"
                    className="logo"
                    src="/assets/coins-icon.png"
                  />
                  {data?.availBalance || 0}
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              if (token) {
                setShowWithdrawModal(true);
              } else {
                toast.error("Please login to continue");
              }
            }}
            className="wa-item"
          >
            <div className="withdraw-wrap">
              <p>Withdraw</p>
              <div className="img-wrap">
                <img alt="" src="/assets/arrow-down.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
