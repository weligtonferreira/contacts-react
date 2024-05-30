import { Link } from 'react-router-dom';
import { MdEmail, MdOutlinePassword, MdPerson } from 'react-icons/md';

import './styles.css';

export default function RegisterPage() {
  return (
    <div className='container'>
      <div className='register-form-container'>
        <p>Cadastre-se</p>

        <form className='register-form'>
          <div className='inputs-form'>
            <div className='input-field-container'>
              <MdPerson size={20} />

              <input
                type='text'
                name='username'
                id='username'
                placeholder='Nome'
              />
            </div>
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
            <div className='input-field-container'>
              <MdOutlinePassword size={20} />

              <input
                type='password'
                name='password'
                id='password'
                placeholder='Confirmar senha'
              />
            </div>
          </div>

          <div className='buttons-form'>
            <div className='button gray-button-color full-width'>
              <Link to='/login' className='secundary-link-button'>
                Entrar
              </Link>
            </div>
            <div className='button blue-button-color full-width'>
              <Link to='' className='primary-link-button'>
                Cadastrar
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
