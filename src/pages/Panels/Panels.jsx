import { useGetIndex } from "../../hooks";
import { useMemo, useState } from "react";
import CreatePanelSection from "../../components/modules/Panels/CreatePanelSection";
import MyPanelSection from "../../components/modules/Panels/MyPanelSection";

const Panels = () => {
  const [tab, setTab] = useState(1);
  const [site, setSite] = useState("all");
  const [siteType, setSiteType] = useState("all");
  const { data } = useGetIndex({ type: "panel_sites" });

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
                    onClick={() => setTab(0)}
                    role="tab"
                    className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active  ng-star-inserted ${tab === 0 ? "mdc-tab-indicator--active" : ""}`}
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
                    onClick={() => setTab(1)}
                    role="tab"
                    className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active  ng-star-inserted ${tab === 1 ? "mdc-tab-indicator--active" : ""}`}
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
          {tab === 1 && (
            <CreatePanelSection
              data={data}
              site={site}
              setSite={setSite}
              siteType={siteType}
              setSiteType={setSiteType}
              filterData={filterData}
            />
          )}
          {tab === 0 && <MyPanelSection />}
        </div>
      </div>
    </div>
  );
};

export default Panels;
