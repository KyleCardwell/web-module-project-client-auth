import React, { useState } from 'react';

const initialForm = {
    username: '',
    password: '',
}

function Login() {

    const [ formValues, setFormValues ] = useState(initialForm)

    const loginButton = (e) => {
        e.preventDefault();
        console.log(formValues)
        setFormValues(initialForm)
    }

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={loginButton}>
                <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </label>

                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </label>

                <button>Log In</button>

            </form>
        </div>
    )
}
export default Login;