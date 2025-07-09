import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../../components/Logo'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HamburgerButton from '../../components/HamburgerButton'
import './index.scss'
import ResumeFile from '../../assets/Nathan-Adrian-Resume-2025.pdf'

const Sidebar = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

  	const toggleHamburgerMenu = () => {
    	setIsMenuOpen(!isMenuOpen);
  	}

	return (
		<div onClick={toggleHamburgerMenu} className={`navigation__sidebar ${isMenuOpen ? 'active' : ''}`} >
			<div className="navigation__sidebar__logo">
				<Logo />
				<HamburgerButton onClick={toggleHamburgerMenu} isMenuOpen={isMenuOpen} />
			</div>
			<div className="navigation__sidebar__drawer">
				<nav id="main-menu" className='navigation__sidebar__nav'>
					<ul>
						<li>
							<NavLink to="/">
								<FontAwesomeIcon icon={faHome} />
								<p>Home</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="about">
								<FontAwesomeIcon icon={faUser} />
								<p>Experience</p>
							</NavLink>
						</li>
						<li>
							<NavLink to="contact">
								<FontAwesomeIcon icon={faEnvelope} />
								<p>Contact</p>
							</NavLink>
						</li>
						<li>
							<a href={ ResumeFile } download>
								<FontAwesomeIcon icon={faFilePdf} />
								<p>Resume</p>
							</a>
						</li>
					</ul>
				</nav>
				<div className="navigation__sidebar__socials">
					<ul>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/nathan-j-adrian/"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/NathanAdrianBear/"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Sidebar