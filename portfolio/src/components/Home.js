import React from 'react';
import ale_image from '../images/ale_profile.jpeg';
import NavBar from './NavBar';
import Particle from './Particle';
import { IconContext } from 'react-icons';
import { FaFileDownload } from 'react-icons/fa';

const Home = () => {
	return (
		<div>
			<div className="home">
				<div className="hero-image">
					<span>
						<img
							src={ale_image}
							alt="Alejandro E. Rodriguez, sitting at Liberty University computer lab"
						/>
					</span>
				</div>
				<div className="greeting">
					<h3>Hi friends!</h3>
					<h1>I'm Alejandro Rodriguez</h1>
					<p>
						I am a Full Stack Web Developer. I specialize in crafting
						responsive and accessible websites and applications that
						go beyond aesthetics. My mission extends beyond coding; I
						aim to empower and enhance the lives of others through my
						work.
					</p>
					<a
						className="download"
						href={
							'https://drive.google.com/file/d/1UWCKGy_xkCvCAuXgp7GI5Vo5thlSSTmq/view?usp=share_link'
						}
						download
					>
						<span>Download Resume</span>
						<IconContext.Provider
							value={{ className: 'downloadIcon' }}
						>
							<FaFileDownload />
						</IconContext.Provider>
					</a>
				</div>
				<div className="navigation">
					<NavBar />
				</div>
			</div>
			<div className="particles">
				<Particle />
			</div>
		</div>
	);
};

export default Home;
