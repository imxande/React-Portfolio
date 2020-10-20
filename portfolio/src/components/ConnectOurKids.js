import React from "react";
import ReactDOM from "react-dom";

const ConnectOurKids = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h2 className="connect-header">Connect Our Kids</h2>
              <div className="connect-wrapper">
                <div>
                  <h3>REACT-NATIVE | JEST | EXPO | REDUX</h3>
                  <p>
                    Connect Our Kids is an iOS and Android app built with React
                    Native, TypeScript, redux, auth0, the Expo CLI and
                    integrates with an Apollo GraphQL backend. The app is
                    currently published in both the Apple Store and Google Play.
                  </p>
                </div>
                <ul>
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.connectOurKids&hl=en_US"
                      className="project-link"
                    >
                      DEMO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/connect-our-kids/mobile-app"
                      className="project-link"
                    >
                      CODE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default ConnectOurKids;
