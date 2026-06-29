import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="mat-tab-header mat-mdc-tab-header mat-mdc-tab-header-pagination-controls-enabled">
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
              onClick={() => navigate("/group/tournaments/10?type=tournaments")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   ${pathname === "/group/tournaments/10" ? "mdc-tab--active mdc-tab-indicator--active" : ""}`}
              id="mat-tab-label-34-0"
              tabIndex={0}
              aria-posinset={1}
              aria-setsize={4}
              aria-controls="mat-tab-content-34-0"
              aria-selected="true"
              aria-disabled="false"
            >
              <span className="mdc-tab__ripple" />
              <div className="mat-ripple mat-mdc-tab-ripple" />
              <span className="mdc-tab__content">
                <span className="mdc-tab__text-label">
                  <img
                    src="https://cdnimg.manage63.com/cricflags/trophy.svg"
                    className="ng-star-inserted"
                  />
                  <p className="ng-star-inserted">Tournaments</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/group/cricket/4?type=inPlay")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   ${pathname === "/group/cricket/4" ? "mdc-tab--active mdc-tab-indicator--active" : ""}`}
              id="mat-tab-label-34-1"
              tabIndex={-1}
              aria-posinset={2}
              aria-setsize={4}
              aria-controls="mat-tab-content-34-1"
              aria-selected="false"
              aria-disabled="false"
            >
              <span className="mdc-tab__ripple" />
              <div className="mat-ripple mat-mdc-tab-ripple" />
              <span className="mdc-tab__content">
                <span className="mdc-tab__text-label">
                  <img
                    src="https://cdnimg.manage63.com/games_icon/ball.svg"
                    className="ng-star-inserted"
                  />
                  <p className="ng-star-inserted">Cricket</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/group/football/1?type=inPlay")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   ${pathname === "/group/football/1" ? "mdc-tab--active mdc-tab-indicator--active" : ""}`}
              id="mat-tab-label-34-2"
              tabIndex={-1}
              aria-posinset={3}
              aria-setsize={4}
              aria-controls="mat-tab-content-34-2"
              aria-selected="false"
              aria-disabled="false"
            >
              <span className="mdc-tab__ripple" />
              <div className="mat-ripple mat-mdc-tab-ripple" />
              <span className="mdc-tab__content">
                <span className="mdc-tab__text-label">
                  <img
                    src="https://cdnimg.manage63.com/games_icon/soccer.svg"
                    className="ng-star-inserted"
                  />
                  <p className="ng-star-inserted">Soccer</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/group/tennis/2?type=inPlay")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   ${pathname === "/group/tennis/2" ? "mdc-tab--active mdc-tab-indicator--active" : ""}`}
              id="mat-tab-label-34-3"
              tabIndex={-1}
              aria-posinset={4}
              aria-setsize={4}
              aria-controls="mat-tab-content-34-3"
              aria-selected="false"
              aria-disabled="false"
            >
              <span className="mdc-tab__ripple" />
              <div className="mat-ripple mat-mdc-tab-ripple" />
              <span className="mdc-tab__content">
                <span className="mdc-tab__text-label">
                  <img
                    src="https://cdnimg.manage63.com/games_icon/tennis.svg"
                    className="ng-star-inserted"
                  />
                  <p className="ng-star-inserted">Tennis</p>
                </span>
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
        className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
      >
        <div className="mat-mdc-tab-header-pagination-chevron" />
      </button>
    </div>
  );
};

export default Header;
