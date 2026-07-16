import { useState, useMemo, useEffect } from "react";
import "./GoExchangeForm.css";
import { useGetIndex } from "../../hooks";
import { useLocation } from "react-router-dom";

// Converts a whole number into Indian-system words (e.g. 1400 -> "One Thousand Four Hundred")
function numberToWordsIndian(num) {
  if (num === 0) return "Zero";

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function twoDigits(n) {
    if (n < 20) return ones[n];
    return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
  }

  function threeDigits(n) {
    if (n < 100) return twoDigits(n);
    const rest = n % 100;
    return (
      ones[Math.floor(n / 100)] +
      " Hundred" +
      (rest ? " " + twoDigits(rest) : "")
    );
  }

  const crore = Math.floor(num / 10000000);
  const lakh = Math.floor((num % 10000000) / 100000);
  const thousand = Math.floor((num % 100000) / 1000);
  const remainder = num % 1000;

  const parts = [];
  if (crore) parts.push(threeDigits(crore) + " Crore");
  if (lakh) parts.push(threeDigits(lakh) + " Lakh");
  if (thousand) parts.push(threeDigits(thousand) + " Thousand");
  if (remainder) parts.push(threeDigits(remainder));

  return parts.join(" ");
}

export default function CreatePanel() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const { data } = useGetIndex({
    type: "panel_info",
    id,
  });

  const [username, setUsername] = useState("");
  const [rateType, setRateType] = useState("Purchase");
  const [accountType, setAccountType] = useState("");
  const [currency, setCurrency] = useState("");
  const [coins, setCoins] = useState("");
  const [rate, setRate] = useState("");

  const total = useMemo(() => {
    const coinsNum = parseFloat(coins) || 0;
    const rateNum = parseFloat(rate) || 0;
    return coinsNum * rateNum;
  }, [coins, rate]);

  const totalFormatted = useMemo(() => {
    return total.toLocaleString("en-IN", { maximumFractionDigits: 2 });
  }, [total]);

  const totalInWords = useMemo(() => {
    return numberToWordsIndian(Math.round(total));
  }, [total]);

  const coinsInWords = useMemo(() => {
    const coinsNum = parseInt(coins, 10);
    return coinsNum ? numberToWordsIndian(coinsNum) + " coins" : "";
  }, [coins]);

  const selectedRateData = data?.result?.[0]?.rateData?.find(
    (item) => item?.rate_type === rateType,
  );

  useEffect(() => {
    if (rateType) {
      setRate(
        rateType === "Purchase"
          ? selectedRateData?.fixed_rate
          : selectedRateData?.min_rate,
      );
    }
    setCoins(selectedRateData?.min_deposit_coins);
  }, [rateType, data]);

  if (!data || !data?.result) return;

  const result = data?.result?.[0];

  const handleRateChange = (e) => {
    if (rateType === "Sharing") {
      const findSharing = result?.rateData?.find(
        (item) => item?.rate_type === "Sharing",
      );
      const rate = Number(e.target.value);

      if (rate >= findSharing?.min_rate && rate < findSharing?.max_rate) {
        {
          setRate(e.target.value);
        }
      }
    }
  };

  const handleCoinsChange = (e) => {
    const coins = Number(e.target.value);
    if (
      coins >= selectedRateData?.min_deposit_coins &&
      coins < selectedRateData?.max_deposit_coins
    ) {
      setCoins(e.target.value);
    }
  };

  return (
    <div
      className="page-body notranslate"
      style={{ height: "calc(100% - 100px)" }}
    >
      <div className="ids-tabnav">
        <div className="ge-page">
          <div className="ge-card">
            <div className="ge-header">
              <div className="ge-brand">
                <div className="ge-logo">
                  <img src={result?.img} alt="" />
                </div>
                <div className="ge-brand-text">
                  <div className="ge-brand-title">{result?.site_name}</div>
                  <div className="ge-brand-sub">{result?.site_url}</div>
                </div>
              </div>
              <button
                onClick={() => window.open(`https://${result?.site_url}`)}
                type="button"
                className="ge-external"
                aria-label="Open external link"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path
                    d="M14 4h6v6M20 4l-9 9M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="ge-card ge-section">
            <div className="ge-field">
              <label className="ge-label" htmlFor="username">
                Preferred Username
              </label>
              <input
                id="username"
                type="text"
                className="ge-input"
                placeholder="Preferred Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="ge-field">
              <label className="ge-label">
                Rate Type<span className="ge-required">*</span>
              </label>
              <div className="ge-radio-row">
                {result?.rateType?.map((item) => {
                  return (
                    <label
                      key={item?.rate_type}
                      className={`ge-radio ${rateType === item?.rate_type ? "ge-radio--active" : ""}`}
                    >
                      <input
                        type="radio"
                        name="rateType"
                        value={item?.rate_type}
                        checked={rateType}
                        onChange={() => setRateType(item?.rate_type)}
                      />
                      <span className="ge-radio-dot" />
                      <span className="ge-radio-label">{item?.rate_type}</span>
                    </label>
                  );
                })}
              </div>
              <div className="ge-hint" style={{ color: "white" }}>
                {selectedRateData?.rate_app_text}
              </div>
            </div>

            <div className="ge-field">
              <label className="ge-label" htmlFor="accountType">
                Account Type<span className="ge-required">*</span>
              </label>
              <div className="ge-select-wrap">
                <select
                  id="accountType"
                  className="ge-select"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                >
                  {result?.roleData?.map((item) => (
                    <option key={item?.role} value={item?.role}>
                      {item?.role}
                    </option>
                  ))}
                </select>
                <svg
                  className="ge-select-chevron"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ge-hint">Non Refundable coins</div>
            </div>
          </div>

          <div className="ge-card ge-section">
            <h2 className="ge-section-title">Deposit Coins</h2>

            <div className="ge-grid">
              <div className="ge-field">
                <label className="ge-label" htmlFor="currency">
                  Select Currency
                </label>
                <div className="ge-select-wrap">
                  <select
                    id="currency"
                    className="ge-select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    {result?.currencyData.map((c) => (
                      <option key={c.currency} value={c.currency}>
                        {c.currency}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="ge-select-chevron"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="ge-hint">
                  {/* {currencyInfo?.available
                    ? "Only INR is available"
                    : "Currency unavailable"} */}
                </div>
              </div>

              <div className="ge-field">
                <label className="ge-label" htmlFor="coins">
                  Enter Coins
                </label>
                <input
                  id="coins"
                  type="number"
                  className="ge-input"
                  value={coins}
                  onChange={handleCoinsChange}
                />

                <div className="ge-hint">{coinsInWords}</div>
              </div>
            </div>

            <div className="ge-field">
              <label className="ge-label" htmlFor="rate">
                Rate<span className="ge-required">*</span>
              </label>
              <input
                type="text"
                id="rate"
                readOnly={rateType === "Purchase"}
                className="ge-input"
                value={rate}
                onChange={handleRateChange}
              />
              {rateType === "Purchase" ? (
                <div className="ge-hint">Fixed Rate</div>
              ) : (
                <div className="ge-hint">
                  {" "}
                  Enter rate between {selectedRateData?.min_rate} and{" "}
                  {selectedRateData?.max_rate}
                </div>
              )}
            </div>

            <div className="ge-total">
              <div className="ge-total-label">Total Calculated Amount</div>
              <div className="ge-total-amount">{totalFormatted}</div>
              <div className="ge-total-words">{totalInWords}</div>
            </div>
          </div>

          <div className="ge-actions">
            <button type="button" className="ge-btn ge-btn-outline">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L22 7H6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9" cy="21" r="1.5" fill="currentColor" />
                <circle cx="18" cy="21" r="1.5" fill="currentColor" />
              </svg>
              Add to cart
            </button>
            <button type="button" className="ge-btn ge-btn-fill">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
