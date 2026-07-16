import { useRef, useState } from "react";
// import AmountSection from "./AmountSection";
import DepositPaymentGateway from "./PaymentGateway";
import DepositPaymentProof from "./PaymentProof";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const BuyPanel = ({ setBuyPanelPayload, buyPanelPayload }) => {
  const ref = useRef();
  const [depositTab, setDepositTab] = useState("account");
  const [current_wallet, setCurrent_wallet] = useState(0);
  const [depositData, setDepositData] = useState({});
  const [paymentId, setPaymentId] = useState(null);
  const [methodType, setMethodType] = useState(null);
  const [methodTitle, setMethodTitle] = useState(null);

  useCloseModalClickOutside(ref, () => {
    setBuyPanelPayload(false);
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
                {/* {depositTab === "amount" && (
                  <AmountSection
                    amount={amount}
                    setAmount={setAmount}
                    setDepositTab={setDepositTab}
                  />
                )} */}
                {depositTab === "account" && (
                  <DepositPaymentGateway
                    current_wallet={current_wallet}
                    setCurrent_wallet={setCurrent_wallet}
                    buyPanelPayload={buyPanelPayload}
                    setMethodTitle={setMethodTitle}
                    setDepositTab={setDepositTab}
                    setDepositData={setDepositData}
                    setMethodType={setMethodType}
                    setPaymentId={setPaymentId}
                    setBuyPanelPayload={setBuyPanelPayload}
                  />
                )}
                {depositTab === "paymentProof" && (
                  <DepositPaymentProof
                    current_wallet={current_wallet}
                    buyPanelPayload={buyPanelPayload}
                    methodTitle={methodTitle}
                    setDepositTab={setDepositTab}
                    paymentId={paymentId}
                    depositData={depositData}
                    methodType={methodType}
                    setBuyPanelPayload={setBuyPanelPayload}
                  />
                )}
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

export default BuyPanel;
