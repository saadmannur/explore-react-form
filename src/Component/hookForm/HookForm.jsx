
import UseInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, handleNameOnChange] = UseInputField('');
    const [email, handleEmailOnChange] = UseInputField('');
    const [password, handlePasswordOnChange] = UseInputField('')

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted", name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input defaultValue={name} onChange={handleNameOnChange} type="text" name='name' placeholder='Your Name' />
                <br />
                <input defaultValue={email} onChange={handleEmailOnChange} type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input defaultValue={password} onChange={handlePasswordOnChange} type="password" name="password" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;