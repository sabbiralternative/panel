const PanelDW = () => {
  return (
    <form
      noValidate
      className="ng-untouched ng-pristine ng-star-inserted ng-valid"
    >
      <div className="page-body notranslate">
        <div className="id-info-wrap">
          <div className="id-info-row">
            <div className="acc-details">
              <div className="site-icon">
                <div className="img-wrap">
                  <img
                    className="tile-logo bronze"
                    src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                  />
                </div>
              </div>
              <div className="site-detail-cont">
                <a href="https://admin.lotusbook.io"> admin.lotusbook.io </a>
                <p className="notranslate">Lotus Book </p>
              </div>
            </div>
          </div>
          <div className="panel-info">
            <ul className="list-body">
              <li>
                <label>
                  <mat-icon
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    {" "}
                    person{" "}
                  </mat-icon>{" "}
                  Username
                </label>
                <p> richie12 </p>
              </li>
              <li className="ng-star-inserted">
                <label>
                  <mat-icon
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    {" "}
                    toll{" "}
                  </mat-icon>{" "}
                  Rate
                </label>
                <p> 0.19</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="form-wrap">
          <label>Deposit Coins</label>
          <input
            type="tel"
            maxLength={9}
            placeholder="Coins"
            className="mat-mdc-input-element ng-untouched ng-pristine cdk-text-field-autofill-monitored ng-valid"
            id="mat-input-8"
            required
            aria-required="true"
            aria-invalid="false"
          />
          <p className="calc-amt ng-star-inserted">0.19 X 10000 = ₹ 1,900</p>

          <p className="note-message"> ten thousand</p>
        </div>
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
