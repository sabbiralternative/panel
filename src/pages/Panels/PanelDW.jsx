import { useLocation } from "react-router-dom";
import { useGetIndex } from "../../hooks";
import { useMemo, useState } from "react";
import { numberToWordsIndian } from "../../utils/numberToWordsIndian";

const PanelDW = () => {
  const [coins, setCoins] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const type = params.get("type");
  const { data: my_panels } = useGetIndex({ type: "my_panels" });
  const selectedPanel = my_panels?.result?.find(
    (item) => item?.hyper_master_id == id,
  );

  const coinsInWords = useMemo(() => {
    const coinsNum = parseInt(coins * selectedPanel?.panel_rate, 10);
    return coinsNum ? numberToWordsIndian(coinsNum) + " coins" : "";
  }, [coins, selectedPanel]);

  return (
    <form
      noValidate
      className="ng-untouched ng-pristine ng-star-inserted ng-valid"
    >
      <div className="page-body notranslate" style={{ marginTop: "10px" }}>
        <div className="id-info-wrap" style={{ margin: "0px 5px" }}>
          <div className="id-info-row">
            <div className="acc-details">
              <div className="site-icon">
                <div className="img-wrap">
                  <img className="tile-logo bronze" src={selectedPanel?.img} />
                </div>
              </div>
              <div className="site-detail-cont">
                <a onClick={() => window.open(selectedPanel?.site_url)}>
                  {" "}
                  {selectedPanel?.site_url}{" "}
                </a>
                <p className="notranslate">{selectedPanel?.site_name} </p>
              </div>
            </div>
          </div>
          <div className="panel-info">
            <ul className="list-body">
              <li>
                <label>
                  <div
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    {" "}
                    person{" "}
                  </div>{" "}
                  Username
                </label>
                <p> {selectedPanel?.username} </p>
              </li>
              <li className="ng-star-inserted">
                <label>
                  <div
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    {" "}
                    toll{" "}
                  </div>{" "}
                  Rate
                </label>
                <p> {selectedPanel?.panel_rate}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-wrap" style={{ margin: "10px 5px" }}>
          <label>{type === "deposit" ? "Deposit" : "Withdraw"} Coins</label>
          <input
            value={coins ? coins : ""}
            onChange={(e) => setCoins(Number(e.target.value))}
            type="number"
            placeholder="Coins"
            className="mat-mdc-input-element ng-untouched ng-pristine cdk-text-field-autofill-monitored ng-valid"
            id="mat-input-8"
            required
            aria-required="true"
            aria-invalid="false"
          />
          <p className="calc-amt ng-star-inserted">
            {selectedPanel?.panel_rate} X {coins} = ₹
            {selectedPanel?.panel_rate * coins}
          </p>

          <p className="note-message">{coinsInWords}</p>
        </div>
        {type === "withdraw" && (
          <div className="withdraw-option">
            <label className="radio-wrapper">
              <input type="radio" name="withdraw" />
              <span className="custom-radio"></span>
              <span className="label-text">Withdraw to wallet</span>
            </label>
          </div>
        )}
      </div>
      <div
        className="page-footer ng-star-inserted"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: "10px",
          padding: "10px",
        }}
      >
        <button
          type="submit"
          className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
        >
          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
          <span className="mdc-button__label">Add to Cart </span>
          <span className="mat-mdc-focus-indicator" />
          <span className="mat-mdc-button-touch-target" />
          <span className="mat-ripple mat-mdc-button-ripple" />
        </button>
        <button
          type="button"
          className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
        >
          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
          <span className="mdc-button__label">Buy Now </span>
          <span className="mat-mdc-focus-indicator" />
          <span className="mat-mdc-button-touch-target" />
        </button>
      </div>
    </form>
  );
};

export default PanelDW;
