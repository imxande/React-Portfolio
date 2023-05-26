import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Connect.css';

const Spoc = ({ isShowing5, hide }) =>
	isShowing5
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
							<h2 className="connect-header">SPOC</h2>
							<div className="connect-wrapper">
								<div>
									<h3>HTML | CSS | HubL | jQuery</h3>
									<p>
										Fully developed SPOC new SPOC Grid, LiftUp, and
										SPOC Automation website pages.Implemented over 15
										new custom modules based on the client design
										provided on figma files.
									</p>
								</div>
								<ul>
									<li>
										<a
											href="https://spocautomation.com/lift-up-culture"
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

export default Spoc;
