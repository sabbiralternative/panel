import { useLocation } from "react-router-dom";
import { useGetIndex } from "../../hooks";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";

const PanelTransaction = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const { data } = useGetIndex({
    type: "view_panel_transaction",
    id,
  });

  const result = data?.result;
  return (
    <div className="page-body">
      <div
        role="main"
        className="md content-ltr hydrated ion-content"
        style={{ "--offset-top": "0px", "--offset-bottom": "0px" }}
      >
        <div className="details-wrapper">
          <div className="id-info-wrap">
            <div className="id-info-row">
              <div className="acc-details">
                <div className="site-icon">
                  <div className="img-wrap">
                    <img className="tile-logo bronze" src={result?.site_logo} />
                  </div>
                </div>
                <div className="site-detail-cont">
                  <h1>
                    {" "}
                    <span>{result?.site_name}</span>
                    <div
                      onClick={() => window.open(`https://${result?.site_url}`)}
                      role="img"
                      aria-hidden="true"
                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                      data-mat-icon-type="font"
                    >
                      open_in_new
                    </div>
                  </h1>
                  <p className="notranslate">{result?.site_url}</p>
                </div>
              </div>
              <div className="creds-wrapper">
                <p className="creds-info">
                  <div
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    person
                  </div>{" "}
                  Username: {result?.username}{" "}
                  <div
                    onClick={() => handleCopyToClipBoard(result?.username)}
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons copy-icon mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    content_copy
                  </div>
                </p>
                <p className="creds-info ng-star-inserted">
                  <div
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    key
                  </div>{" "}
                  Password: {result?.password}{" "}
                  <div
                    onClick={() => handleCopyToClipBoard(result?.password)}
                    role="img"
                    aria-hidden="true"
                    className="mat-icon notranslate material-icons copy-icon mat-ligature-font mat-icon-no-color"
                    data-mat-icon-type="font"
                  >
                    content_copy
                  </div>
                </p>

                {/* <p className="password-highlighter ng-star-inserted">
                  {" "}
                  Pasword is with capital T{" "}
                </p> */}
              </div>
              <p className="data-time"> ID Created on: {result?.date_added} </p>
            </div>
          </div>

          {/* <div className="transactions-wrap">
            <div className="page-heading">
              <h3>Transaction History</h3>
            </div>
            <div className="items-wrap">
              <div className="txn-item ng-star-inserted">
                <div className="img-wrap ng-star-inserted">
                  <img
                    className="tile-logo"
                    src="https://ss.gopunt.com/go-punt/uploads/panel_icons/Lotusbook247.games.png"
                  />
                </div>

                <div className="item-details">
                  <p className="txn-type">
                    {" "}
                    Create Panel <span> 06 Apr 26 08:00 PM </span>
                  </p>
                  <p className="amount">
                    <span className="ng-star-inserted">1,900 </span>

                    <span className="status Approved">Approved </span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PanelTransaction;
