import {React, Component} from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import emailIcon from '../../assets/images/email-mail-pngrepo-com.png'
import classes from './ContactForm.module.css'


class ContactForm extends Component {

    state = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    }

    inputUpdate = (event, id) => {
        let newStateObj = {...this.state}
        newStateObj[id] = event.target.value
        this.setState({
            ...newStateObj
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        alert("Your mail has been successfully submitted!\nThank you!!!")
    }

    render() {
        let name;
        let type;
        let placeholder;
        let required = false;

        let input = Object.keys(this.state).map((id) => {

            switch (id) {
                case ('name'):
                    name = id;
                    type='text';
                    placeholder='Name';
                    break
                case ('subject'):
                    name = id;
                    type='text';
                    placeholder='Subject ';
                    required = true
                    break
                case ('email'):
                    name = id;
                    type='email';
                    placeholder='E-mail';
                    required = true
                    break
                case ('phone'):
                    name = id;
                    type='tel';
                    placeholder='Phone';
                    break
                case ('message'):
                    name = id;
                    type='textarea';
                    placeholder='Message';
                    required = true;
                    break
                default:
                    name=''
                    type='text'
                    placeholder=''
            }

            return <Input key={id}
                name={name} 
                placeholder={placeholder} 
                type={type}
                value={this.state[name]}
                required ={required}
                update={(event) => this.inputUpdate(event, id)} />
        })

        return (
            <div id='contact-us' className={classes.Contact}>
                <div >
                    <h1>Spicy soups</h1>
                    <p>Want to make an inquiry? <br /> Fill the form and we'll get back to you shortly.</p>
                    <h4>
                        <span>
                            <img src={emailIcon} alt="email-icon" />
                        </span>
                        <a href={'mailto:ezikeog@gmail.com'}>spicysoups@gmail.com</a>
                    </h4>
                    
                    <form 
                        className={classes.Form} 
                        action="https://formsubmit.co/ezikeog@gmail.com" 
                        method="POST">
                            <div className={classes.Grid}>
                                {input}
                            </div>
                            
                            <input type="hidden" name="_next" value="http://spicysoups.tk" />
                            <input type="hidden" name="_captcha" value="false" />
                            <Button 
                                class='Submit' 
                                type='submit' 
                                >SUBMIT</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactForm;