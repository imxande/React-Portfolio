import React from "react";
import ReactDOM from "react-dom";
import "../css/Connect.css";

const PostHere = ({ isShowing2, hide }) =>
  isShowing2
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
              <h2 className="connect-header">Post Here</h2>
              <div className="connect-wrapper">
                <div>
                  <h3>REACT | NODE/EXPRESS | REACTSTRAP</h3>
                  <p>
                    Post Here helps you find the best place to share on Reddit.
                    The user enters their post and Post Here finds the subreddit
                    that is most appropriate for that post.
                  </p>
                </div>
                <ul>
                  <li>
                    <a
                      href="https://posthere.juhrard.now.sh/login"
                      className="project-link"
                    >
                      DEMO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/BuildWeek-PostHere/back-end"
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

export default PostHere;
