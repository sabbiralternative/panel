import "./SiteSelects.css";

export default function SiteSelects({
  siteTypeData,
  data,
  site,
  setSite,
  siteType,
  setSiteType,
}) {
  const handleSiteChange = (e) => {
    setSite(e.target.value);
    setSiteType("all");
  };

  const handleSiteTypeChange = (e) => {
    setSiteType(e.target.value);
    setSite("all");
  };

  return (
    <div className="ss-row">
      <div className="ss-select-wrap">
        <select className="ss-select" value={site} onChange={handleSiteChange}>
          <option value="all">All</option>
          {data.map((opt, i) => (
            <option key={`opt-${i}`} value={opt?.site_url}>
              {opt?.site_name} {opt?.site_url}
            </option>
          ))}
        </select>
        <svg
          className="ss-chevron"
          viewBox="0 0 24 24"
          width="14"
          height="14"
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

      <div className="ss-select-wrap">
        <select
          className="ss-select"
          value={siteType}
          onChange={handleSiteTypeChange}
        >
          <option value="all">All</option>
          {siteTypeData.map((opt) => (
            <option key={`opt-${opt?.name}`} value={opt?.name}>
              {opt.name}
            </option>
          ))}
        </select>
        <svg
          className="ss-chevron"
          viewBox="0 0 24 24"
          width="14"
          height="14"
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
    </div>
  );
}
