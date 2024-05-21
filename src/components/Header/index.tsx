import { MdLogout } from 'react-icons/md';
import { RiContactsBook3Fill } from 'react-icons/ri';

import './styles.css';

export default function Header() {
  return (
    <header>
      <div className='contact-header'>
        <RiContactsBook3Fill size={20} />
        <p className=''>Contacts</p>
      </div>

      <div className='contact-header'>
        <p>
          Olá, <span>Usuário</span>
        </p>
        <MdLogout size={20} />
      </div>
    </header>
  );
}
