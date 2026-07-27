import { useRef } from "react";
import images from "../../../assets/images";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const CreateIdWarning = ({
  setAlert,
  title,
  description,
  setCreateIdModal,
  createIdWarning,
}) => {
  const ref = useRef();

  useCloseModalClickOutside(ref, () => {
    setAlert(false);
  });
  return (
    <div
      className="swal2-container swal2-bottom swal2-backdrop-show"
      style={{ overflowY: "auto" }}
    >
      <div
        ref={ref}
        aria-labelledby="swal2-title"
        aria-describedby="swal2-html-container"
        className="swal2-popup swal2-modal success-alert alert-dialog"
        tabIndex={-1}
        role="dialog"
        aria-live="assertive"
        aria-modal="true"
        style={{ display: "grid" }}
      >
        <button
          type="button"
          className="swal2-close"
          aria-label="Close this dialog"
          style={{ display: "none" }}
        >
          ×
        </button>
        <ul className="swal2-progress-steps" style={{ display: "none" }} />
        <div className="swal2-icon swal2-icon-show" style={{ display: "flex" }}>
          <div className="swal2-icon-content">
            <img src={images.warning} />
            <p>{title}</p>
          </div>
        </div>
        <img className="swal2-image" style={{ display: "none" }} />
        <h2
          className="swal2-title"
          id="swal2-title"
          style={{ display: "none" }}
        />
        <div
          className="swal2-html-container"
          id="swal2-html-container"
          style={{ display: "block" }}
        >
          {description}
        </div>
        <input
          id="swal2-input"
          className="swal2-input"
          style={{ display: "none" }}
        />
        <input type="file" className="swal2-file" style={{ display: "none" }} />
        <div className="swal2-range" style={{ display: "none" }}>
          <input type="range" />
          <output />
        </div>
        <select
          id="swal2-select"
          className="swal2-select"
          style={{ display: "none" }}
        />
        <div className="swal2-radio" style={{ display: "none" }} />
        <label className="swal2-checkbox" style={{ display: "none" }}>
          <input type="checkbox" id="swal2-checkbox" />
          <span className="swal2-label" />
        </label>
        <textarea
          id="swal2-textarea"
          className="swal2-textarea"
          style={{ display: "none" }}
          defaultValue={""}
        />
        <div
          className="swal2-validation-message"
          id="swal2-validation-message"
          style={{ display: "none" }}
        />
        <div
          className="swal2-actions"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <button
            onClick={() => setAlert(false)}
            type="button"
            className="swal2-confirm swal2-styled"
            aria-label
            style={{ display: "inline-block", width: "100%" }}
          >
            Yes, Play Directly
          </button>
          <button
            onClick={() => {
              setCreateIdModal(createIdWarning);
              setAlert(false);
            }}
            type="button"
            className="swal2-cancel swal2-styled"
            aria-label
            style={{ display: "inline-block", width: "100%" }}
          >
            No, Create ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateIdWarning;
