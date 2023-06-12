import React, { useState } from 'react';
import Button from '../Button/Button';
import './LoginForm.css';
import { Link , useNavigate} from 'react-router-dom';
import { users } from '../../data';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false); 
  const navigate = useNavigate(); 

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se existe um usuário com o e-mail e senha fornecidos
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      console.log('Usuário autenticado:', user);
      if (user.userType === 'client') {
        navigate('/profile'); 
      } else {
        navigate('/adminpage'); 
      }
      
    } else {
      setShowErrorPopup(true);
      console.log('E-mail ou senha inválidos'); 
    }
  };

  return (
    <div>
          <div className="LoginForm">
          <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="submit-button">
        <input type="submit" value="Sign In" />
        </div>
        <div className='Register'>
          <Link to="/register">
          <Button name={'Register'}/>
          </Link>
        </div>

        <div className="error-message">
        <Popup
              position="right center"
              open={showErrorPopup}
              onClose={() => setShowErrorPopup(false)}
            >
              <div>Email or password is invalid. Please try again.</div>
            </Popup>
          </div>

      </form>
    </div>
  </div>
      
  );
};

export default LoginForm;
