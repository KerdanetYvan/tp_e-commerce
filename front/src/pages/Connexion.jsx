import React from 'react';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';

export default function Connexion() {
  return (<>
        <div>Connexion</div>
        <SignUp />
        <Link to="/register">Not registered ?</Link>
    </>)
}
