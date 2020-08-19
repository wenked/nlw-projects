import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const Landing: React.FC = () => {
	const [totalConnections, setTotalConnections] = useState(0);
	const { signOut, user } = useAuth();

	useEffect(() => {
		api.get('/connections').then((response) => {
			const { total } = response.data;

			setTotalConnections(total);
		});
	}, []);

	return (
		<div id='page-landing'>
			<div className='user-header'>
				<div className='user-name-avatar'>
					<Link to='/myprofile'>
						<img src={user?.avatar} alt='avatar-img' />
					</Link>
					<h3>
						{user?.name} {user?.lastname}
					</h3>
				</div>

				<button type='button' onClick={signOut}>
					Logout
				</button>
			</div>
			<div id='page-landing-content' className='container'>
				<div className='logo-container'>
					<img src={logoImg} alt='Proffy' />
					<h2>Sua plataforma de estudos online.</h2>
				</div>

				<img
					src={landingImg}
					alt='Plataforma de estudos'
					className='hero-image'
				/>
				<div className='buttons-container'>
					<Link to='/study' className='study'>
						<img src={studyIcon} alt='Estudar' />
						Estudar
					</Link>
					<Link to='/give-classes' className='give-classes'>
						<img src={giveClassesIcon} alt='Dar Aulas' />
						Dar aulas
					</Link>
				</div>

				<span className='total-connections'>
					Total de {totalConnections} conexões já realizadas{' '}
					<img src={purpleHeartIcon} alt='Coração roxo' />
				</span>
			</div>
		</div>
	);
};

export default Landing;
