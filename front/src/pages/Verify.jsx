import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Verify() {
    const [response, setResponse] = useState('Error verifying your account, please check your email');
    const { token } = useParams();

    useEffect(() => {
        const verifyUser = async () => {
            const { data, status } = await axios.put(`http://localhost:8000/api/user/verify/${token}`);
            console.log(data);

            if( status === 200 || status === 201 ) {
                setResponse(`Well done, your account is now verified`);
            };
        };

        verifyUser();
    }, [token]);

    return (<div className='verify'>
        <div className='containerVe'>
            <h1>Verification Page</h1>
            <p>{response}</p>
            <Link to='/' className='button'>Return to main page</Link>
        </div>
    </div>)
}
