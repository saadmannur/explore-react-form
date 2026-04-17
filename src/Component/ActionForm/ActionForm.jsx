import React from 'react';

const ActionForm = () => {

    const formHandlerAction = (actionData) => {
        console.log(actionData.get('name'))
        console.log(actionData.get('email'))
    }

    return (
        <div>
            <form action={formHandlerAction}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ActionForm;