const MyPanelSection = ({ data }) => {
  return (
    <div className="mat-mdc-tab-body-wrapper" style={{}}>
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
            <div className="id-list my-id">
              {data?.result?.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="ls-cont ng-star-inserted"
                    style={{}}
                  >
                    <div className="list-wrap">
                      <div className="id-info">
                        <div className="ls-detail">
                          <img alt="ID Image" src={item?.img} />
                          <div className="ls-info">
                            <h4>
                              {item?.panel_type} {item?.site_url}
                            </h4>
                            <p>{item?.username}</p>
                            <p className="currency-type">
                              Rate @ {item?.panel_rate}
                            </p>
                            <p className="rate-account-type">
                              {" "}
                              {item?.panel_rate_type} - {item?.panel_type}{" "}
                            </p>
                          </div>
                        </div>
                        <div className="ls-right">
                          <div className="btn-wrap">
                            <button
                              aria-label="Deposit Button"
                              className="d-btn mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-accent mat-mdc-button-base"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
                              <span className="mdc-button__label"> D </span>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                            </button>
                            <button
                              aria-label="Withdraw Button"
                              className="w-btn mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-accent mat-mdc-button-base"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-fab__ripple" />
                              <span className="mdc-button__label"> W </span>
                              <span className="mat-mdc-focus-indicator" />
                              <span className="mat-mdc-button-touch-target" />
                            </button>
                            <button
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPanelSection;
