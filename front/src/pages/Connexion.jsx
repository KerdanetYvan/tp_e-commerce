import React from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';

export default function Connexion() {
  return (<div className='connexion'>
    <div className='containerCo'>
        <div className='titleCo'>Connexion</div>
        <SignUp />
        <Link to="/register" className='linkNotRe'>Not registered ?</Link>
    </div>
  </div>)
}
