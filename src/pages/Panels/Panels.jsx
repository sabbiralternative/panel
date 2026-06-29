const Panels = () => {
  return (
    <div className="page-body notranslate">
      <div className="ids-tabnav">
        <div className="app-for-internal">
          <div className="forSearchBar-internal">
            <div className="ng-star-inserted app-global-search-dialog">
              <div className="global-search-modal gSearch_v2_wrapper notOnHomepage">
                {/* <div className="search-bar">
                  <div
                    role="img"
                    className="mat-icon notranslate search-icon material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    search
                  </div>
                  <div className="form-wrap">
                    <input
                      placeholder="Search Matches / Casino Games"
                      type="text"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="latest-events announcements ng-star-inserted">
              <div className="ann-wrap">
                <div
                  role="img"
                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                >
                  campaign
                </div>
                <marquee
                  width="100%"
                  direction="left"
                  height="auto"
                  className="blink-it ng-star-inserted"
                >
                  You are playing on India’s most trending and trusted sports
                  and casino website! Happy Punting!
                </marquee>
              </div>
            </div>
          </div>
        </div>
        <div
          className="mat-mdc-tab-group mat-primary mat-mdc-tab-group-stretch-tabs mat-tab-group"
          style={{ "--mat-tab-animation-duration": "0ms" }}
        >
          <div className="mat-mdc-tab-header mat-tab-header">
            <button
              aria-hidden="true"
              type="button"
              tabIndex={-1}
              className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled"
              disabled
            >
              <div className="mat-mdc-tab-header-pagination-chevron" />
            </button>
            <div className="mat-mdc-tab-label-container">
              <div
                role="tablist"
                className="mat-mdc-tab-list"
                style={{ transform: "translateX(0px)" }}
              >
                <div className="mat-mdc-tab-labels">
                  <div
                    role="tab"
                    className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted"
                    id="mat-tab-label-0-0"
                    tabIndex={-1}
                    aria-posinset={1}
                    aria-setsize={2}
                    aria-controls="mat-tab-content-0-0"
                    aria-selected="false"
                    aria-disabled="false"
                  >
                    <span className="mdc-tab__ripple" />
                    <div className="mat-ripple mat-mdc-tab-ripple" />
                    <span className="mdc-tab__content">
                      <span className="mdc-tab__text-label">MY PANELS (0)</span>
                    </span>
                    <span className="mdc-tab-indicator">
                      <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                  </div>
                  <div
                    role="tab"
                    className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active mdc-tab-indicator--active ng-star-inserted"
                    id="mat-tab-label-0-1"
                    tabIndex={0}
                    aria-posinset={2}
                    aria-setsize={2}
                    aria-controls="mat-tab-content-0-1"
                    aria-selected="true"
                    aria-disabled="false"
                  >
                    <span className="mdc-tab__ripple" />
                    <div className="mat-ripple mat-mdc-tab-ripple" />
                    <span className="mdc-tab__content">
                      <span className="mdc-tab__text-label">CREATE PANEL</span>
                    </span>
                    <span className="mdc-tab-indicator">
                      <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              aria-hidden="true"
              type="button"
              tabIndex={-1}
              className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled"
              disabled
            >
              <div className="mat-mdc-tab-header-pagination-chevron" />
            </button>
          </div>
          <div className="mat-mdc-tab-body-wrapper">
            <div
              role="tabpanel"
              className="mat-mdc-tab-body ng-tns-c737557735-11 ng-star-inserted mat-tab-body"
              id="mat-tab-content-0-0"
              aria-labelledby="mat-tab-label-0-0"
            >
              <div
                className="mat-mdc-tab-body-content ng-tns-c737557735-11 ng-trigger ng-trigger-translateTab"
                style={{
                  transform: "translate3d(-100%, 0px, 0px)",
                  minHeight: "1px",
                  visibility: "hidden",
                }}
              ></div>
            </div>
            <div
              role="tabpanel"
              className="mat-mdc-tab-body ng-tns-c737557735-12 mat-mdc-tab-body-active ng-star-inserted mat-tab-body"
              id="mat-tab-content-0-1"
              aria-labelledby="mat-tab-label-0-1"
            >
              <div
                className="mat-mdc-tab-body-content ng-tns-c737557735-12 ng-trigger ng-trigger-translateTab"
                style={{ transform: "none" }}
              >
                <div className="filter-wrap ng-star-inserted" style={{}}>
                  <div className="filter-section">
                    <div className="custom-select site-select">
                      <div className="mat-form-field mat-mdc-form-field ng-tns-c1205077789-3 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c1205077789-3 mdc-text-field--filled mdc-text-field--no-label">
                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c1205077789-3 ng-star-inserted" />

                          <div className="mat-mdc-form-field-flex ng-tns-c1205077789-3">
                            <div className="mat-mdc-form-field-infix ng-tns-c1205077789-3">
                              <div
                                role="combobox"
                                aria-autocomplete="none"
                                aria-haspopup="listbox"
                                placeholder="All Site"
                                className="mat-select mat-mdc-select ng-tns-c3393473648-4 ng-tns-c1205077789-3 mat-mdc-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted"
                                aria-labelledby="mat-select-value-1"
                                id="mat-select-0"
                                tabIndex={0}
                                aria-expanded="false"
                                aria-required="false"
                                aria-disabled="false"
                                aria-invalid="false"
                              >
                                <div className="mat-mdc-select-trigger ng-tns-c3393473648-4">
                                  <div
                                    className="mat-mdc-select-value ng-tns-c3393473648-4"
                                    id="mat-select-value-1"
                                  >
                                    <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c3393473648-4 ng-star-inserted">
                                      All Site
                                    </span>
                                  </div>
                                  <div className="mat-mdc-select-arrow-wrapper ng-tns-c3393473648-4">
                                    <div className="mat-mdc-select-arrow ng-tns-c3393473648-4">
                                      <svg
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        height="24px"
                                        focusable="false"
                                        aria-hidden="true"
                                        className="ng-tns-c3393473648-4"
                                      >
                                        <path
                                          d="M7 10l5 5 5-5z"
                                          className="ng-tns-c3393473648-4"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mdc-line-ripple ng-tns-c1205077789-3 mdc-line-ripple--deactivating ng-star-inserted" />
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c1205077789-3">
                          <div
                            className="mat-mdc-form-field-hint-wrapper ng-tns-c1205077789-3 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                            style={{ opacity: 1, transform: "translateY(0%)" }}
                          >
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c1205077789-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-select all-site">
                      <div className="mat-form-field mat-mdc-form-field ng-tns-c1205077789-5 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c1205077789-5 mdc-text-field--filled mdc-text-field--no-label">
                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c1205077789-5 ng-star-inserted" />

                          <div className="mat-mdc-form-field-flex ng-tns-c1205077789-5">
                            <div className="mat-mdc-form-field-infix ng-tns-c1205077789-5">
                              <div
                                role="combobox"
                                aria-autocomplete="none"
                                aria-haspopup="listbox"
                                placeholder="Site Type"
                                className="mat-select mat-mdc-select ng-tns-c3393473648-6 ng-tns-c1205077789-5 mat-mdc-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted"
                                aria-labelledby="mat-select-value-3"
                                id="mat-select-2"
                                tabIndex={0}
                                aria-expanded="false"
                                aria-required="false"
                                aria-disabled="false"
                                aria-invalid="false"
                              >
                                <div className="mat-mdc-select-trigger ng-tns-c3393473648-6">
                                  <div
                                    className="mat-mdc-select-value ng-tns-c3393473648-6"
                                    id="mat-select-value-3"
                                  >
                                    <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c3393473648-6 ng-star-inserted">
                                      Site Type
                                    </span>
                                  </div>
                                  <div className="mat-mdc-select-arrow-wrapper ng-tns-c3393473648-6">
                                    <div className="mat-mdc-select-arrow ng-tns-c3393473648-6">
                                      <svg
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        height="24px"
                                        focusable="false"
                                        aria-hidden="true"
                                        className="ng-tns-c3393473648-6"
                                      >
                                        <path
                                          d="M7 10l5 5 5-5z"
                                          className="ng-tns-c3393473648-6"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mdc-line-ripple ng-tns-c1205077789-5 mdc-line-ripple--deactivating ng-star-inserted" />
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c1205077789-5">
                          <div
                            className="mat-mdc-form-field-hint-wrapper ng-tns-c1205077789-5 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                            style={{ opacity: 1, transform: "translateY(0%)" }}
                          >
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c1205077789-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-section" style={{ display: "none" }}>
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
                    <div className="custom-select site-select">
                      <div className="mat-form-field mat-mdc-form-field ng-tns-c1205077789-7 mat-mdc-form-field-type-mat-select mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-valid ng-star-inserted">
                        <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c1205077789-7 mdc-text-field--filled mdc-text-field--no-label">
                          <div className="mat-mdc-form-field-focus-overlay ng-tns-c1205077789-7 ng-star-inserted" />

                          <div className="mat-mdc-form-field-flex ng-tns-c1205077789-7">
                            <div className="mat-mdc-form-field-infix ng-tns-c1205077789-7">
                              <div
                                role="combobox"
                                aria-autocomplete="none"
                                aria-haspopup="listbox"
                                placeholder="All Site"
                                className="mat-select mat-mdc-select ng-tns-c3393473648-8 ng-tns-c1205077789-7 mat-mdc-select-empty ng-untouched ng-pristine ng-valid ng-star-inserted"
                                aria-labelledby="mat-select-value-5"
                                id="mat-select-4"
                                tabIndex={0}
                                aria-expanded="false"
                                aria-required="false"
                                aria-disabled="false"
                                aria-invalid="false"
                              >
                                <div className="mat-mdc-select-trigger ng-tns-c3393473648-8">
                                  <div
                                    className="mat-mdc-select-value ng-tns-c3393473648-8"
                                    id="mat-select-value-5"
                                  >
                                    <span className="mat-mdc-select-placeholder mat-mdc-select-min-line ng-tns-c3393473648-8 ng-star-inserted">
                                      All Site
                                    </span>
                                  </div>
                                  <div className="mat-mdc-select-arrow-wrapper ng-tns-c3393473648-8">
                                    <div className="mat-mdc-select-arrow ng-tns-c3393473648-8">
                                      <svg
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        height="24px"
                                        focusable="false"
                                        aria-hidden="true"
                                        className="ng-tns-c3393473648-8"
                                      >
                                        <path
                                          d="M7 10l5 5 5-5z"
                                          className="ng-tns-c3393473648-8"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mdc-line-ripple ng-tns-c1205077789-7 mdc-line-ripple--deactivating ng-star-inserted" />
                        </div>
                        <div className="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align ng-tns-c1205077789-7">
                          <div
                            className="mat-mdc-form-field-hint-wrapper ng-tns-c1205077789-7 ng-trigger ng-trigger-transitionMessages ng-star-inserted"
                            style={{ opacity: 1, transform: "translateY(0%)" }}
                          >
                            <div className="mat-mdc-form-field-hint-spacer ng-tns-c1205077789-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="ion-content ng-star-inserted md content-ltr hydrated"
                  style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
                  role="main"
                >
                  <template />
                  <div
                    slot="fixed"
                    className="ion-refresher ng-star-inserted md refresher-md hydrated refresher-native"
                  >
                    <div className="md hydrated ion-refresher-content">
                      <div className="refresher-pulling">
                        <div className="refresher-pulling-icon">
                          <div className="spinner-arrow-container">
                            <div
                              className="ion-spinner md spinner-circular spinner-paused hydrated"
                              role="progressbar"
                              style={{ animationDuration: "1400ms" }}
                            >
                              <template />
                            </div>
                            <div className="arrow-container">
                              <div
                                aria-hidden="true"
                                role="img"
                                className="md hydrated ion-icon"
                              >
                                <template />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="refresher-refreshing">
                        <div className="refresher-refreshing-icon">
                          <div
                            className="md spinner-circular hydrated ion-spinner"
                            role="progressbar"
                            style={{
                              animationDuration: "1400ms",
                              animationDelay: "-655ms",
                            }}
                          >
                            <template />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="id-list create-id ng-star-inserted"
                    style={{}}
                  >
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1774689056176_5803_dKgaPYsZKmjBtUFBDGGvxxbyq.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Exchange (Original)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goexch.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                              <div className="top-sites-promote ng-star-inserted">
                                <div
                                  role="img"
                                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >
                                  {" "}
                                  emoji_events{" "}
                                </div>

                                <span className="ng-star-inserted">
                                  Trending
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1777971399250_1040_HRjjvHDUtKAsKBvZxcKBdGrTT.png"
                            />
                            <div className="ls-info">
                              <h4>O Exch (Go)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">oexch.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.125
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                              <div className="top-sites-promote ng-star-inserted">
                                <div
                                  role="img"
                                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >
                                  {" "}
                                  emoji_events{" "}
                                </div>

                                <span className="ng-star-inserted">
                                  Trending
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1776335582980_5213_MKWrKZgjkBVGRCnCuiAUdQgsv.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Cric Exchange (Go)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">cricexch.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.125
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                              <div className="top-sites-promote ng-star-inserted">
                                <div
                                  role="img"
                                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >
                                  {" "}
                                  emoji_events{" "}
                                </div>

                                <span className="ng-star-inserted">
                                  Trending
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lemonexch7.png"
                            />
                            <div className="ls-info">
                              <h4>Lemon Exchange v1 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lemonexch7.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lemonexch7.png"
                            />
                            <div className="ls-info">
                              <h4>Lemon Exchange v2 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lemonexch7.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lemonexch7.png"
                            />
                            <div className="ls-info">
                              <h4>Lemon Exchange v1 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lemonexch777.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lemonexch7.png"
                            />
                            <div className="ls-info">
                              <h4>Lemon Exchange v2 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lemonexch777.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1776254294137_9348_fMqxUUZstbpWKQdnvBTUrUmEy.jpeg"
                            />
                            <div className="ls-info">
                              <h4>PDM 999 (Original)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">pdm999.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.085
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lemonexch7.png"
                            />
                            <div className="ls-info">
                              <h4>Lemon Exchange (Sky)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lemonexch365.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.17
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/kalyanbook.png"
                            />
                            <div className="ls-info">
                              <h4>Kalyan Book 9 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  kalyanbook9.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/kalyanbook.png"
                            />
                            <div className="ls-info">
                              <h4>Kalyan Book v1 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  kalyanbook777.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go ID v1 (D247)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goid9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go ID v2 (D247)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goid9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.13
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go ID v3 (D247)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goid9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go ID v4 (D247)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goid9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/asiaexch-site.jpg"
                            />
                            <div className="ls-info">
                              <h4>Asia Exchange (Original)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">asiaexch.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.045
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/exch666.png"
                            />
                            <div className="ls-info">
                              <h4>Exchange 666 (Asia)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">exch666.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.045
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/fairexch.png"
                            />
                            <div className="ls-info">
                              <h4>Fair Exchange (Asia)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  fairexchange9.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.045
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/armaniexch.png"
                            />
                            <div className="ls-info">
                              <h4>Armani (Asia)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">armani9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.045
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/world9.png"
                            />
                            <div className="ls-info">
                              <h4>World Exchange 9</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  worldexch9.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.045
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Exchange v1 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goexch777.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Exchange v2 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goexch777.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.13
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Exchange v3 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goexch777.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Exchange v4 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goexch777.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1776254925682_3021_NSaGZtrvWmqcswkYUenmmxJWN.png"
                            />
                            <div className="ls-info">
                              <h4>Radhe Exchange (Original)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">radheex.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Match (Radhe)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">gomatch9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.08
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649134028639_115881_GSFKSJQXDMQNXSRYHGUSECGUM.png"
                            />
                            <div className="ls-info">
                              <h4>India Exchange (Radhe)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">indiaexch.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649134202460_241509_YXFGGPFSDQNTKZJAJGNMGRQZX.png"
                            />
                            <div className="ls-info">
                              <h4>Silver Exchange (Radhe)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  silverexch247.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/icebook777.png"
                            />
                            <div className="ls-info">
                              <h4>Ice Book 7</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">icebook7.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/abexch9.png"
                            />
                            <div className="ls-info">
                              <h4>Ab Exchange</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">abex9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lotusbook9.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Book</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">lotusbook9.co</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.085
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lotusbook7.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Book</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lotusbook7.art
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/playexch.png"
                            />
                            <div className="ls-info">
                              <h4>Play Exchange 9</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">playexch9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.05
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649133592022_278456_RZUWSZTMKDKJMGSSQXBQXABZH.png"
                            />
                            <div className="ls-info">
                              <h4>Sky 24x7</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">sky24x7.co</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.05
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1687150351192_590668_RZGAGCQDZPSSENDAAGXETEXAC.png"
                            />
                            <div className="ls-info">
                              <h4>Taj 777</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">taj777.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.17
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/ice.png"
                            />
                            <div className="ls-info">
                              <h4>Ice Exchange (Original)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  iceexchange.in
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.13
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/icebook777.png"
                            />
                            <div className="ls-info">
                              <h4>Ice v1 (D247)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">ice247.co </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/icebook9.png"
                            />
                            <div className="ls-info">
                              <h4>Ice Book v1 (Diamond) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">icebook9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/icebook777.png"
                            />
                            <div className="ls-info">
                              <h4>Ice Book v1 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  Icebook777.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649133907751_406966_CEUHYVZSPZDCQWXGESBVXANNW.png"
                            />
                            <div className="ls-info">
                              <h4>Exchange 333 (Fairbook)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">exch333.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.085
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/exch444.png"
                            />
                            <div className="ls-info">
                              <h4>Exchange 444 (Lotus9)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">exch444.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.085
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1779342460593_9443_egQjSuZenvqNDcCdtEYcFSCfF.jpeg"
                            />
                            <div className="ls-info">
                              <h4>O Exchange v4 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">oexch9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1779342460593_9443_egQjSuZenvqNDcCdtEYcFSCfF.jpeg"
                            />
                            <div className="ls-info">
                              <h4>O Exchange v3 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">oexch9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1779342451641_7031_UkAcQiucJFJasDumigbgCRAaT.jpeg"
                            />
                            <div className="ls-info">
                              <h4>O Exchange v2 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">oexch9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.13
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1779342442512_9756_HwBuRKcJXcxqDvNdpGbPDEgtW.jpeg"
                            />
                            <div className="ls-info">
                              <h4>O Exchange v1 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">oexch9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1776536968754_3176_gkVCKwpVKmBbMkZWySSGVJtAe.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Tiger Exchange (Original)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">tiger365.pro</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.11
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Cric 9 (Ice)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">gocric9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.08
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Book (Diamond99)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">gobook9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.06
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Exchange (Lotus)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goexch247.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.13
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Exchange (Sky)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goexch365.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.16
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1768583921102_401_seZoTAiTyBBkFgaRNwjCbAkAh.png"
                            />
                            <div className="ls-info">
                              <h4>King Exchange (Original)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  kingexch365.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.06
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/the100exch.png"
                            />
                            <div className="ls-info">
                              <h4>The 100 Exchange</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  the100exch.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669636865883_432401_RHPFKJJUSMZFJAGUVXVQDQNVV.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Go Asia 9 (Asia)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">goasia9.io</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.05
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lemonexch7.png"
                            />
                            <div className="ls-info">
                              <h4>Lemon Exchange (Lotus)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lemonexch247.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="../../assets/img/default-img.svg"
                            />
                            <div className="ls-info">
                              <h4>Dream 555</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">dream555.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.05
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpaanel.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v1 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanelexch9.co
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpaanel.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v2 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanelexch9.co
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.13
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpaanel.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v3 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanelexch9.co
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpaanel.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v4 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanelexch9.co
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpanel777.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v1 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanel777.now
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpanel777.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v2 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanel777.now
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.13
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpanel777.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v3 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanel777.now
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.1
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/allpanel777.png"
                            />
                            <div className="ls-info">
                              <h4>All Panel v4 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  allpanel777.now
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.09
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Exchange (Lotus Copy)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">lotusex.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.12
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/9wicket.com.png"
                            />
                            <div className="ls-info">
                              <h4>9 Wicket (Sky Copy)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">9wicket.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.115
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/golden exchange.png"
                            />
                            <div className="ls-info">
                              <h4>Golden Exchange v1</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  goldenexch99.now
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/silverexch.png"
                            />
                            <div className="ls-info">
                              <h4>Silver Exchange v1</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  silverexch.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/lotusbook7.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Book</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lotusbook247.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.24
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1669703395694_955091_UGPQZVMNVPYJBMGCZNKQRBTJJ.png"
                            />
                            <div className="ls-info">
                              <h4>Sky Exchange (Original) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">skyexch.vip</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.17
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649133677756_723089_KAKYDAFMHCABYAATTMPKKDRBU.png"
                            />
                            <div className="ls-info">
                              <h4>Diamond Exchange v1 (Original) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  diamondexch99.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.22
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/world777.png"
                            />
                            <div className="ls-info">
                              <h4>World v1 (Original) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">world777.now</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.22
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/world777.png"
                            />
                            <div className="ls-info">
                              <h4>World v2 (Original) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">world777.now</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.17
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/silver777.png"
                            />
                            <div className="ls-info">
                              <h4>Silver Bet v1 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  silverbet777.club
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Golden7777.com.png"
                            />
                            <div className="ls-info">
                              <h4>Golden v1 (World)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  golden7777.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Book</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  thelotusbook.co
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.12
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Book</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lotusbooks247.games
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.12
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Book</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">lotusbook.io</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus Book</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  lotusbook247.io
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                            />
                            <div className="ls-info">
                              <h4>Lotus 247</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">lotus247.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649133921545_780779_RHACMUKFFAZBCRMGMUKEGWMQF.png"
                            />
                            <div className="ls-info">
                              <h4>Fair Bet v1 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">fairbet7.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.16
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649134353603_356362_JWSNTZSWMTXCREQXCDHFKKBNZ.png"
                            />
                            <div className="ls-info">
                              <h4>Vip Exchange v1 (Diamond) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">vipexch9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.17
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649134322285_8052_HJVJFPYGUVHDYJSFPBBVHGBTY.png"
                            />
                            <div className="ls-info">
                              <h4>Play Book v1 (Diamond) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">playbook9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649134303489_248965_GCAQUJKSSCKTKXJUGTCKCZFRK.png"
                            />
                            <div className="ls-info">
                              <h4>Match Exchange v1 (Diamond) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">matchexch9.co</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.18
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1776178356979_3655_jsucMMTpFwyBpcdmEbjnSiXsR.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Lords Exchange (Original) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">lordsexch.now</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.16
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/masterexch.png"
                            />
                            <div className="ls-info">
                              <h4>Master Exchange (Sky)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  masterexch.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.16
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649133730903_51704_GSZCXGWWXQVDHWCAUYANYYJKE.png"
                            />
                            <div className="ls-info">
                              <h4>Match Box v1 (Diamond) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">matchbox9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1649162015276_271752_PFPPAFVFHXVEVJHGAYYBYDPQV.png"
                            />
                            <div className="ls-info">
                              <h4>Sky Fair</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">skyfair.vip</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting HKD 12
                              </p>

                              <p className="curr-text ng-star-inserted">
                                Available Currency:{" "}
                                <span className="yellow-text ng-star-inserted">
                                  {" "}
                                  HKD
                                </span>
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1664169254747_814880_QTADDARKKGDBNPKKDSFHZCWKT.png"
                            />
                            <div className="ls-info">
                              <h4>D247 v1 (Original) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">d247.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.22
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1665809949573_613920_TWVZVFKNKNNHVFPTDHCYPSQCR.png"
                            />
                            <div className="ls-info">
                              <h4>Silver Book v1 (D247)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  silverbook247.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.15
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/silverexch.png"
                            />
                            <div className="ls-info">
                              <h4>Silver Exchange v3 (Diamond) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  silverexch.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.11
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/iceasia9.png"
                            />
                            <div className="ls-info">
                              <h4>Ice Asia 9</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">iceasia9.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.05
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/silverexch.png"
                            />
                            <div className="ls-info">
                              <h4>Silver Exchange v2 (Diamond)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  silverexch.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.14
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1776536868845_8082_jtitUGRobNoqxapbDmdWCMRen.jpeg"
                            />
                            <div className="ls-info">
                              <h4>Ten Exchange (Original) </h4>
                              <p className="copy_to_clip">
                                <span className="site__url">tenexch.com</span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.18
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/kalyan.png"
                            />
                            <div className="ls-info">
                              <h4>Kalyan Book (Sky)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  kalyanbook365.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.16
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ls-cont ng-star-inserted">
                      <div className="list-wrap">
                        <div className="id-info">
                          <div className="ls-detail">
                            <img
                              alt="ID Image"
                              src="https://ss.gopunt.com/go-punt/uploads/panel_icons/1757397730176_7181_aGxelzpigiGSSvrtwsNxrjdgF.png"
                            />
                            <div className="ls-info">
                              <h4>Ice Book (Sky)</h4>
                              <p className="copy_to_clip">
                                <span className="site__url">
                                  icebook365.com
                                </span>
                                <span>
                                  <div
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    content_copy{" "}
                                  </div>
                                </span>
                              </p>
                              <p className="yellow-text ng-star-inserted">
                                Starting INR 0.17
                              </p>

                              <div className="games-available">
                                <div
                                  size={10}
                                  className="p-0 pt-5 id-description"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="ls-right">
                            <div className="btn-wrap">
                              <button className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                                <span className="mdc-button__label">
                                  {" "}
                                  Create{" "}
                                </span>
                                <span className="mat-mdc-focus-indicator" />
                                <span className="mat-mdc-button-touch-target" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="site-not-listed ng-star-inserted">
                      <h3>Could not find what you are looking for</h3>
                      <div className="yellow-btn text-center">
                        <button
                          type="submit"
                          className="secondary-btn btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label">
                            {" "}
                            Want a site to be listed? Click Here{" "}
                          </span>
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panels;
