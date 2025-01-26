import '../styles/Connexion.css';
import React from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Connexion() {
  return (<Layout>
    <div className='connexion'>
      <div className='containerCo'>
          <div className='titleCo'>Connexion</div>
          <SignUp />
          <Link to="/register" className='linkNotRe'>Not registered ?</Link>
      </div>
    </div>
  </Layout>)
}
