import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 

export default function Contact() {
    const [contactMe, setContactMe] = useState({email: "", message: ""})
    const [sent, setSent] = useState(false);

    function updateForm(e, type) {
        if (type === 'email') setContactMe({ email: e.target.value, message: contactMe.message })
        if (type === 'message') setContactMe({ email: contactMe.email, message: e.target.value })
    }

    function isMobile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return true;
        }
    
        if (/android/i.test(userAgent)) {
            return true;
        }
    
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return true;
        }
    
        return false;
    }

    function submitForm(e) {
        e.preventDefault()
        emailjs.sendForm('service_hee2z0k', 'template_64xiaal', e.target, 'QxntZ0JqFClXTdgbQ')
        .then((result) => {
            setSent(true);
            setContactMe({email: "", message: ""})
            setInterval(() => {
                setSent(false);
            }, 3000);
        }).catch((err) => {
            alert('Error occured while sending email, sorry for the inconvenience. Please try again later.')
        });
    }
    return (
    <div className='contact-me'>
        <div className='contact-top'>Contact Me</div>
        <form className='contact-from' onSubmit={e => submitForm(e)}>
            <div className='contact-form-cont'>
                <input type="email" name='email' id="email" required placeholder='Email' autoComplete='off' onChange={e => updateForm(e, 'email')} value={contactMe.email} autoFocus={!isMobile()} />
                <textarea id="message" name='email' required placeholder='Message' autoComplete='off' onChange={e => updateForm(e, 'message')} value={contactMe.message}/>
                <button type="submit">Send</button>
            </div>
        </form>
        <div className={`template ${!sent && 'hide'}`}>
            Sent!
        </div>
    </div>
    )
}
