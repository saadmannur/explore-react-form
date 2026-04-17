import React, { useState } from 'react';

const ControlledForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password)
        if (password.length < 8) {
            setError("password must be 8 character or longer")
        } else {
            setError('')
        }
    }

    const handleEmailOnChange = (e) => {
        setEmail(e.target.value)
    }
    const handleNameOnChange = (e) => {
        setName(e.target.value)
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length <= 6){
            setError("password must be 8 character or longer")
        }else{
            setError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameOnChange} defaultValue={name} placeholder='Name'/>
                <br />
                <input type="email" name="email" defaultValue={email} onChange={handleEmailOnChange}  placeholder='Email' required/>
                <br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder='password' required />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <p style={{ color: "red" }}><small>{error}</small></p>
        </div>
    );
};

export default ControlledForm;