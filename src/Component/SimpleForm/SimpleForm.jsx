import React from 'react';

const SimpleForm = () => {

    const formHandler = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="text" name='email' placeholder='Your Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;