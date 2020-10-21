import React from "react";
import ReactDOM from "react-dom";
import "../css/Connect.css";

const DevDeskQueue = ({ isShowing4, hide }) =>
  isShowing4
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
              <h2 className="connect-header">Dev Desk Queue</h2>
              <div className="connect-wrapper">
                <div>
                  <h3>HTML | CSS | LESS</h3>
                  <p>
                    Landing page for the Dev Desk Queue application. Dev Desk
                    Queue makes it easier for Lambda School’s staff to keep
                    track of questions asked by students.
                  </p>
                </div>
                <ul>
                  <li>
                    <a
                      href="https://ecstatic-einstein-d0ae82.netlify.app/"
                      className="project-link"
                    >
                      DEMO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/DevDesk-Queue-bw/marketing-page"
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

export default DevDeskQueue;
