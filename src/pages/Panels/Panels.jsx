import { useGetIndex } from "../../hooks";
import { useMemo, useState } from "react";
import CreatePanelSection from "../../components/modules/Panels/CreatePanelSection";
import MyPanelSection from "../../components/modules/Panels/MyPanelSection";
import { useLocation, useNavigate } from "react-router-dom";
import { Settings } from "../../api";
import CreateIdWarning from "../../components/modals/Panels/CreateIdWarning";
import CreateIdModal from "../../components/modals/Panels/CreateID";
import CreateIdSuccess from "../../components/modals/Panels/CreateIdSuccess";
import CreateIdError from "../../components/modals/Panels/CreateIdError";

const Panels = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tab = params.get("tab");
  const navigate = useNavigate();
  const [site, setSite] = useState("all");
  const [siteType, setSiteType] = useState("all");
  const [createIdWarning, setCreateIdWarning] = useState(false);
  const [createIdModal, setCreateIdModal] = useState(false);
  const [createIdSuccess, setCreateIdSuccess] = useState(false);
  const [create_direct, setCreate_direct] = useState(false);
  const [createIdError, setCreateIdError] = useState(false);
  const { data } = useGetIndex({ type: "panel_sites", b2c: Settings.b2c });
  const { data: my_panels, refetch: refetchMyPanel } = useGetIndex({
    type: "my_panels",
    b2c: Settings.b2c,
  });

  const filterData = useMemo(() => {
    if (!data?.result) return [];

    if (siteType === "all" && site === "all") return data?.result;

    if (site !== "all") {
      const selectedSite = data?.result?.find(
        (item) => item?.site_url === site,
      );

      return data?.result?.filter(
        (item) => item?.site_type === selectedSite?.site_type,
      );
    }

    if (siteType !== "all") {
      return data?.result?.filter((item) => item?.site_type === siteType);
    }
  }, [site, siteType, data]);

  return (
    <div className="page-body notranslate">
      {createIdWarning && (
        <CreateIdWarning
          title="Create Id"
          description="Don't create an ID, play directly on this app to experience much faster withdrawals!"
          setAlert={setCreateIdWarning}
          setCreateIdModal={setCreateIdModal}
          createIdWarning={createIdWarning}
        />
      )}
      {createIdModal && (
        <CreateIdModal
          setCreateIdModal={setCreateIdModal}
          setCreateIdSuccess={setCreateIdSuccess}
          createIdModal={createIdModal}
          setCreateIdError={setCreateIdError}
          setCreate_direct={setCreate_direct}
          refetchMyPanel={refetchMyPanel}
        />
      )}
      {create_direct && (
        <CreateIdSuccess
          title="Request Placed"
          description="Account creation request has been sent successfully placed. We will shortly confirm the status"
          setAlert={setCreate_direct}
        />
      )}
      {createIdSuccess && (
        <CreateIdSuccess
          title="YaY!! Instant Account Created"
          description="Your account has been successfully created. Have fun with Games!"
          setAlert={setCreateIdSuccess}
        />
      )}
      {createIdError && (
        <CreateIdError
          title="Alert"
          description="You already have 2 active IDs for this site. Maximum ID creation limit reached for this site. Please close any unused ID or contact support for limit increment."
          setAlert={setCreateIdError}
        />
      )}

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
            {/* <button
              aria-hidden="true"
              type="button"
              tabIndex={-1}
              className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled"
              disabled
            >
              <div className="mat-mdc-tab-header-pagination-chevron" />
            </button> */}
            <div className="mat-mdc-tab-label-container">
              <div
                role="tablist"
                className="mat-mdc-tab-list"
                style={{ transform: "translateX(0px)" }}
              >
                <div className="mat-mdc-tab-labels">
                  <div
                    onClick={() => navigate("/panels?tab=0")}
                    role="tab"
                    className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active  ng-star-inserted ${tab == 0 ? "mdc-tab-indicator--active" : ""}`}
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
                      <span className="mdc-tab__text-label">
                        MY {Settings.b2c ? "IDs" : "PANELS"} (
                        {my_panels?.result?.length})
                      </span>
                    </span>
                    <span className="mdc-tab-indicator">
                      <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                  </div>
                  <div
                    onClick={() => navigate("/panels?tab=1")}
                    role="tab"
                    className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active  ng-star-inserted ${tab == 1 ? "mdc-tab-indicator--active" : ""}`}
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
                      <span className="mdc-tab__text-label">
                        CREATE {Settings.b2c ? "ID" : "PANEL"}
                      </span>
                    </span>
                    <span className="mdc-tab-indicator">
                      <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <button
              aria-hidden="true"
              type="button"
              tabIndex={-1}
              className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled"
              disabled
            >
              <div className="mat-mdc-tab-header-pagination-chevron" />
            </button> */}
          </div>
          {tab == 1 && (
            <CreatePanelSection
              data={data}
              site={site}
              setSite={setSite}
              siteType={siteType}
              setSiteType={setSiteType}
              filterData={filterData}
              refetchMyPanel={refetchMyPanel}
              setCreateIdWarning={setCreateIdWarning}
            />
          )}
          {tab == 0 && <MyPanelSection data={my_panels} />}
        </div>
      </div>
    </div>
  );
};

export default Panels;
