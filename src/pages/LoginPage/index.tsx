import { Link } from 'react-router-dom';
import { MdEmail, MdOutlinePassword } from 'react-icons/md';

import './styles.css';

export default function LoginPage() {
  return (
    <div className='container'>
      <div className='login-form-container'>
        <p>Entre</p>

        <form className='login-form'>
          <div className='inputs-form'>
            <div className='input-field-container'>
              <MdEmail size={20} />

              <input
                type='email'
                name='email'
                id='email'
                autoComplete='on'
                placeholder='E-mail'
              />
            </div>
            <div className='input-field-container'>
              <MdOutlinePassword size={20} />

              <input
                type='password'
                name='password'
                id='password'
                placeholder='Senha'
              />
            </div>
          </div>

          <div className='buttons-form'>
            <div className='button gray-button-color full-width'>
              <Link to='/register' className='secundary-link-button'>
                Cadastrar
              </Link>
            </div>
            <div className='button blue-button-color full-width'>
              <Link to='' className='primary-link-button'>
                Entrar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
