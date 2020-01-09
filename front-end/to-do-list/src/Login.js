import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './utils/common';

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        // axios.post('http://localhost:4000/auth/login', { username: username.value, password: password.value })
        axios({
            method: 'post',
            url: 'http://localhost:4000/auth/login',
            data: { username: username.value, password: password.value },
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        })



            .then(response => {
                console.log(response);
                setLoading(false);
                setUserSession(response.data.token, response.data.user);
                props.history.push('/dashboard');
            }).catch(error => {
                setLoading(false);
                console.log(error);
            });
    }

    return (
        <div>
            Login<br /><br />
            <div>
                Username<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;