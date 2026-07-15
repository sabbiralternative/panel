import { useNavigate } from "react-router-dom";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import SiteSelects from "./SiteSelect";

const CreatePanelSection = ({
  data,
  site,
  setSite,
  siteType,
  setSiteType,
  filterData,
}) => {
  const navigate = useNavigate();
  return (
    <div className="mat-mdc-tab-body-wrapper">
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
          {data?.siteType && (
            <SiteSelects
              setSite={setSite}
              site={site}
              setSiteType={setSiteType}
              siteType={siteType}
              siteTypeData={data?.siteType}
              data={data?.result}
            />
          )}

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

            <div className="id-list create-id ng-star-inserted" style={{}}>
              {filterData?.map((item, i) => {
                return (
                  <div key={i} className="ls-cont ng-star-inserted">
                    <div className="list-wrap">
                      <div className="id-info">
                        <div className="ls-detail">
                          <img alt="ID Image" src={item?.img} />
                          <div className="ls-info">
                            <h4>{item?.site_name}</h4>
                            <p className="copy_to_clip">
                              <span className="site__url">
                                {item?.site_url}
                              </span>
                              <span>
                                <div
                                  onClick={() =>
                                    handleCopyToClipBoard(item?.site_url)
                                  }
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
                              Starting INR {item?.minPanelRate?.min_rate}
                            </p>

                            <div className="games-available">
                              <div
                                size={10}
                                className="p-0 pt-5 id-description"
                              ></div>
                            </div>
                            <div className="top-sites-promote ng-star-inserted">
                              {item?.show_top_flag === "trophy" && (
                                <div
                                  role="img"
                                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >
                                  {" "}
                                  emoji_events{" "}
                                </div>
                              )}

                              {item?.show_top_text && (
                                <span className="ng-star-inserted">
                                  {item?.show_top_text}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="ls-right">
                          <div className="btn-wrap">
                            <button
                              onClick={() =>
                                navigate(`/panels/create?id=${item?.id}`)
                              }
                              className="btn dark-outlined-btn create-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                            >
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
                );
              })}

              {/* <div className="site-not-listed ng-star-inserted">
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
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePanelSection;
