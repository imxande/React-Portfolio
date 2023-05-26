import React from 'react';
import Navbar from './NavBar';
import '../css/Projects.css';
import ConnectOurKids from './ConnectOurKids';
import PostHere from './PostHere';
import useModal from '../helpers/useModal';
import LinkUp from './LinkUp';
import NutriScience from './NutriScience';
import Spoc from './Spoc';
import FitzMartin from './FitzMartin';

const Projects = () => {
	const {
		isShowing1,
		isShowing2,
		isShowing3,
		isShowing4,
		isShowing5,
		isShowing6,
		toggle1,
		toggle2,
		toggle3,
		toggle4,
		toggle5,
		toggle6,
	} = useModal();
	return (
		<div className="projects-container">
			<div className="top-container">
				<h2>PROJECTS</h2>
				<span>MY WORK</span>
			</div>
			<div className="projects-gallery">
				<div className="card">
					<img
						className="project-image"
						src={require('../images/Connect.jpg')}
						alt={'CONNECT OUR KIDS'}
					/>
					<div
						className="hidden-message hidden-overlay"
						id="connect"
						onClick={toggle1}
					>
						<span>Click To Learn More!</span>
						<ConnectOurKids isShowing1={isShowing1} hide={toggle1} />
					</div>
				</div>
				<div className="card">
					<img
						className="project-image"
						src={require('../images/PostHere.jpg')}
						alt={'Post Here 2'}
					/>
					<div
						className="hidden-message hidden-overlay"
						id="post-here"
						onClick={toggle2}
					>
						<span>Click To Learn More!</span>
						<PostHere isShowing2={isShowing2} hide={toggle2} />
					</div>
				</div>
				<div className="card">
					<img
						className="project-image"
						src={require('../images/NutriScience.jpg')}
						alt={'Guess Who'}
					/>
					<div
						className="hidden-message hidden-overlay"
						id="guess-who"
						onClick={toggle3}
					>
						<span>Click To Learn More!</span>
						<NutriScience isShowing3={isShowing3} hide={toggle3} />
					</div>
				</div>
				<div className="card">
					<img
						className="project-image"
						src={require('../images/LinkUp.jpg')}
						alt={'Dev Desk Queue'}
					/>
					<div
						className="hidden-message hidden-overlay"
						id="dev-desk-queue"
						onClick={toggle4}
					>
						<span>Click To Learn More!</span>
						<LinkUp isShowing4={isShowing4} hide={toggle4} />
					</div>
				</div>
				<div className="card">
					<img
						className="project-image"
						src={require('../images/SPOC.jpg')}
						alt={'Dev Desk Queue'}
					/>
					<div
						className="hidden-message hidden-overlay"
						id="dev-desk-queue"
						onClick={toggle5}
					>
						<span>Click To Learn More!</span>
						<Spoc isShowing5={isShowing5} hide={toggle5} />
					</div>
				</div>
				<div className="card">
					<img
						className="project-image"
						src={require('../images/fitzmartin.jpg')}
						alt={'Dev Desk Queue'}
					/>
					<div
						className="hidden-message hidden-overlay"
						id="dev-desk-queue"
						onClick={toggle6}
					>
						<span>Click To Learn More!</span>
						<FitzMartin isShowing6={isShowing6} hide={toggle6} />
					</div>
				</div>
			</div>
			<div className="navigation">
				<Navbar />
			</div>
		</div>
	);
};

export default Projects;
