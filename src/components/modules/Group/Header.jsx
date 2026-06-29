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
            <div
              onClick={() => navigate("/group/kabaddi/5?type=inPlay")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   ${pathname === "/group/kabaddi/5" ? "mdc-tab--active mdc-tab-indicator--active" : ""}`}
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
                  <svg
                    width={24}
                    height={24}
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1019.73 925.87"
                  >
                    <path
                      d="M477.87,452.27q64,64,153.6,64l4.26,89.6q-121.59,0-217.6-89.6L388.27,486.4,290.13,588.8,384,678.4v256H298.67V712.53l-55.47-51.2V755.2L64,938.67,4.27,878.93l153.6-153.6L106.67,576c-8.53-25.6,4.27-46.93,25.6-64l140.8-140.8c17.07-21.33,38.4-29.87,59.73-29.87s34.13,4.27,46.93,12.8l98.14,98.14ZM1024,507.73H938.67V362.67l-76.8-29.87,38.4,187.73L942.93,742.4l38.4,187.73h-89.6L814.93,588.8l-89.6,85.33v256H640v-320l89.6-85.33L704,396.8c-25.6,25.6-55.47,51.2-89.6,68.27a179.32,179.32,0,0,1-106.67-51.2c68.27-12.8,115.2-46.94,145.07-98.14l42.67-68.26c25.6-42.67,64-55.47,110.93-34.14L1024,307.2V507.73Zm-537.6-320a85.34,85.34,0,1,1-85.33,85.34,85.58,85.58,0,0,1,85.33-85.34ZM704,12.8a85.34,85.34,0,1,1-85.33,85.33A85.58,85.58,0,0,1,704,12.8Z"
                      transform="translate(-4.27 -12.8)"
                      fill={pathname === "/group/kabaddi/5" ? "#000" : "#fff"}
                    />
                  </svg>
                  <p className="ng-star-inserted">Kabadi</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/group/politics/6?type=inPlay")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   ${pathname === "/group/politics/6" ? "mdc-tab--active mdc-tab-indicator--active" : ""}`}
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
                  <img alt="Tab Icon" src="/assets/poll.svg" />
                  <p className="ng-star-inserted">Politics</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/crash-games")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   `}
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
                    alt="Tab Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/go-crash-icon.svg"
                  />
                  <p className="ng-star-inserted">Go Crash</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/instant-games")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   `}
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
                    alt="Tab Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/instant_game.svg"
                  />
                  <p className="ng-star-inserted">Instant Games</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/game-shows")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   `}
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
                    alt="Tab Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/gaming_show.svg"
                  />
                  <p className="ng-star-inserted">Game Shows</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/indian-cards")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   `}
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
                    alt="Tab Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/go-casino-icon.svg"
                  />
                  <p className="ng-star-inserted">Indian Cards</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/live-casino")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   `}
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
                    alt="Tab Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/go-casino-icon.svg"
                  />
                  <p className="ng-star-inserted">Live Casino</p>
                </span>
              </span>
              <span className="mdc-tab-indicator">
                <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
              </span>
            </div>
            <div
              onClick={() => navigate("/slots")}
              style={{ width: "auto" }}
              role="tab"
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator  ng-star-inserted   `}
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
                    alt="Tab Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/casino-icon.svg"
                  />
                  <p className="ng-star-inserted">Slots</p>
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
