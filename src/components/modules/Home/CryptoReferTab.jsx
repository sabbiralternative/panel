import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useLanguage from "../../../hooks/useLanguage";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import "./CryptoReferTab.css";
import { setShowLoginModal } from "../../../redux/features/global/globalSlice";

const CryptoReferTab = () => {
  const { valueByLanguage } = useLanguage();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigate = () =>
    token ? navigate("/affiliate") : dispatch(setShowLoginModal(true));

  return (
    <div className="crt-container">
      <div>
        <div
          onClick={() => {
            window.open(
              "https://onramp.money/main/buy/?appId=1&mode=overlay&origin=https://onramp.money&defaultCoinCode=USDT",
            );
          }}
          id="add Crypto"
          title="Add Crypto"
          className="crt-card crt-card-buy"
        >
          <div className="crt-card-inner">
            <div className="crt-icon-wrap">
              <div className="crt-icon-circle">
                <img
                  src="/assets/usdt.png"
                  alt="usdt"
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
                  className="crt-icon-img"
                  loading="eager"
                  width={18}
                  height={18}
                  title="usdt - 10Sports"
                />
              </div>
            </div>
            <div className="crt-text-wrap">
              <div className="crt-title crt-title-buy">
                {languageValue(valueByLanguage, LanguageKey.BUY_CRYPTO)}
              </div>
              <div className="crt-subtitle crt-subtitle-buy">
                USDT, BTC, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleNavigate} className="crt-refer-group">
        <div
          id="referAndEarnCard"
          title="Refer & Earn"
          className="crt-card crt-card-refer"
        >
          <div className="crt-card-inner">
            <div className="crt-icon-wrap">
              <div className="crt-icon-circle crt-icon-circle-primary">
                <svg
                  className="crt-svg-icon"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x={3} y={8} width={18} height={4} rx={1} />
                  <path d="M12 8v13" />
                  <path d="M19 12v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9" />
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                </svg>
              </div>
            </div>
            <div className="crt-text-wrap">
              <div className="crt-title crt-title-refer">
                {languageValue(valueByLanguage, LanguageKey.REFER_AND_EARN)}
              </div>
              <div className="crt-subtitle crt-subtitle-refer">
                {languageValue(valueByLanguage, LanguageKey.EARN_COMMISSIONS)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoReferTab;
