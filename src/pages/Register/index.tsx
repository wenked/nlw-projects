import React, { useState, FormEvent } from 'react';
import './styles.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import PageWithBackgroundImg from '../../components/PageWithBackgroundImg';

const Register: React.FC = () => {
	const [name, setName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log({ name, lastname, email, password });
		api.post('/register', { name, lastname, email, password });

		history.push('/registercompleted');
	};

	return (
		<PageWithBackgroundImg button>
			<div className='login-form'>
				<form onSubmit={handleSubmit}>
					<div className='labels'>
						<label htmlFor='login'>Cadastro</label>
						<h5>
							Preencha os dados abaixo <br />
							para começar.
						</h5>
					</div>
					<div className='input-block'>
						<input
							type='text'
							placeholder='Nome'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Sobrenome'
							value={lastname}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<input
							type='text'
							placeholder='E-mail'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							placeholder='senha'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button type='submit'>Concluir cadastro</button>
				</form>
			</div>
		</PageWithBackgroundImg>
	);
};

export default Register;
