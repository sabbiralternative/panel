import { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const token = useSelector(userToken);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = (item) => {
    const link = `/event-details/${item?.eventTypeId}/${item?.eventId}`;
    setIsOpen(false);
    navigate(link);
  };

  useEffect(() => {
    if (query?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: query,
        });

        if (data?.result?.length > 0) {
          setIsOpen(true);
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [query, token]);

  useEffect(() => {
    const categories = Array.from(new Set(data.map((item) => item.eventType)));

    setCategories(categories);
  }, [data]);

  console.log(data, isOpen);

  return (
    <div className="search-wrap" ref={containerRef}>
      <div className={`search-bar ${isOpen ? "search-bar--open" : ""}`}>
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <line
            x1="16.65"
            y1="16.65"
            x2="21"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search Matches / Casino Games"
          value={query}
          onChange={handleChange}
        />
        {query && (
          <button
            type="button"
            className="search-clear"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            ×
          </button>
        )}
      </div>

      {isOpen && data?.length > 0 && query?.length > 2 && (
        <div className="search-dropdown">
          {data?.length === 0 && query?.length > 2 ? (
            <div className="search-empty">No results for {query}</div>
          ) : (
            categories.map((category) => (
              <div className="search-group" key={category}>
                <div className="search-group-label">{category}</div>
                {data
                  .filter((item) => item.eventType === category)
                  .map((item, i) => (
                    <button
                      type="button"
                      className="search-item"
                      key={i}
                      onClick={() => handleSelect(item)}
                    >
                      <span className="search-item-label">{item?.name}</span>
                      <span className="search-item-meta">
                        {" "}
                        {item?.openDate}
                      </span>
                    </button>
                  ))}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
