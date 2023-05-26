import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Connect.css';

const NutriScience = ({ isShowing3, hide }) =>
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
									<h3>HTML | CSS | JavaScript | HubL </h3>
									<p>
										NutriScience webinar page, landing page and
										registration. Setup and developed new webinar
										page, landing pages with new custom modules, and
										new registration form.
									</p>
								</div>
								<ul>
									<li>
										<a
											href="https://nutriscienceusa.com/"
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

export default NutriScience;
