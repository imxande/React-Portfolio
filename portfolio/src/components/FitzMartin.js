import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Connect.css';

const FitzMartin = ({ isShowing6, hide }) =>
	isShowing6
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
							<h2 className="connect-header">FitzMartin</h2>
							<div className="connect-wrapper">
								<div>
									<h3>HTML | CSS | HubL | jQuery</h3>
									<p>
										Developed FitzMartin website, implemented new
										sections and templates for their new Centricity
										build. Fully developed FitzMartin new Podcast
										pages provided on figma files.
									</p>
								</div>
								<ul>
									<li>
										<a
											href="https://www.fitzmartin.com/"
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

export default FitzMartin;
