import React from "react";
import ReactDOM from "react-dom";
import "../css/Connect.css";

const GuessWho = ({ isShowing3, hide }) =>
  isShowing3
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
              <h2 className="connect-header">Guess Who</h2>
              <div className="connect-wrapper">
                <div>
                  <h3>HTML | CSS | REACT</h3>
                  <p>
                    Guess Who Twitter Game. The rules are simple! Just match a
                    tweet to the Twitter user who you think sent it. The game
                    offers multiple levels of progression. You can even play
                    with your friends.
                  </p>
                </div>
                <ul>
                  <li>
                    <a href="https://guesswho.now.sh/" className="project-link">
                      DEMO
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/GuessWhoTwitter/Front-End2/tree/master/front-end"
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

export default GuessWho;
