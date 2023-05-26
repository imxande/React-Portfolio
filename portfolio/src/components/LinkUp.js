import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Connect.css';

const LinkUp = ({ isShowing4, hide }) =>
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
							<h2 className="connect-header">LinkUp</h2>
							<div className="connect-wrapper">
								<div>
									<h3>HubL | HTML | CSS | JavaScript</h3>
									<p>
										Implemented new templates and landing pages with
										re-usable modules that contain default values
										making it easier for marketers to add new content
										to their HubSpot website.
									</p>
								</div>
								<ul>
									<li>
										<a
											href="https://www.linkup.com/"
											className="project-link"
										>
											Website
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

export default LinkUp;
