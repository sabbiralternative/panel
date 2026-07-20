import CasinoProviders from "../../components/modules/Home/CasinoProviders";
import Casino from "../../components/modules/Home/Casino";
import CardGames from "../../components/modules/Home/CardGames";
import InPlay from "../../components/modules/Home/InPlay";
import LiveCasino from "../../components/modules/Home/LiveCasino";
import useBannerImage from "../../hooks/banner";
import SliderImage from "../../components/modules/Home/SliderImage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../../components/modules/Home/Search";

const Home = () => {
  const navigate = useNavigate();
  const { data } = useBannerImage();

  useEffect(() => {
    const leftArrow = document.getElementsByClassName("swiper-button-prev");
    Array?.from(leftArrow)?.forEach((item) => {
      item?.remove();
    });
    const rightArrow = document.getElementsByClassName("swiper-button-next");
    Array?.from(rightArrow)?.forEach((item) => {
      item?.remove();
    });
  }, [data]);
  return (
    <div className="page-body">
      <div className="ion-content-wrapper">
        <div
          role="main"
          className="md content-ltr hydrated"
          style={{
            "--offset-top": "0px",
            "--offset-bottom": "0px",
            height: "100%",
          }}
        >
          <div className="pagetab-body" style={{ marginTop: "0px" }}>
            <div className="pagetab-content">
              {data?.banner?.length > 0 && (
                <SliderImage bannerImage={data?.banner} />
              )}
              <div className="create-acc ng-star-inserted">
                <div className="active-acc-tab">
                  <div size={12} className="btnWrap">
                    <button
                      onClick={() => navigate("/panels")}
                      className="create-btn full-width mb-5"
                    >
                      <div className="create-icon-wrap"> Create Panel </div>
                    </button>
                    <div className="hGame-btn-wrap ng-star-inserted">
                      <div className="jetBtnWrap ng-star-inserted">
                        <button className="jetxBtn animated-border-box-glow mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label">
                            <img
                              className="background"
                              src="https://ss.manage90.com/panel-wl/commonAssets/aviator_bg.png"
                            />
                            <img
                              className="img-text"
                              src="https://ss.manage90.com/panel-wl/commonAssets/aviator_text.png"
                            />
                            <img
                              alt="game.game_name"
                              className="game-icon"
                              src="https://ss.manage90.com/panel-wl/commonAssets/aviator_icon.png"
                            />
                          </span>
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                        </button>
                      </div>
                    </div>
                    <div className="hGame-btn-wrap ng-star-inserted">
                      <div className="jetBtnWrap ng-star-inserted">
                        <button className="jetxBtn animated-border-box-glow mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base">
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple" />
                          <span className="mdc-button__label">
                            <img
                              className="background"
                              src="https://ss.manage90.com/panel-wl/commonAssets/chickenroad_bg.png"
                            />
                            <img
                              className="img-text"
                              src="https://ss.manage90.com/panel-wl/commonAssets/chickenroad_text.png"
                            />
                            <img
                              alt="game.game_name"
                              className="game-icon"
                              src="https://ss.manage90.com/panel-wl/commonAssets/chickenroad_icon.png"
                            />
                          </span>
                          <span className="mat-mdc-focus-indicator" />
                          <span className="mat-mdc-button-touch-target" />
                          <span className="mat-ripple mat-mdc-button-ripple" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Search />
              <CasinoProviders />
              <InPlay />
              <CardGames />
              <LiveCasino />
              <Casino />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
