import { useState } from 'react';
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaGoogle } from 'react-icons/fa';

export default function Footer() {
    const [copied, setCopy] = useState(false)
    function copy() {
        const text = 'rakshit240405@gmail.com';
        navigator.clipboard.writeText(text);
        setCopy(true)
        setInterval(() => {
            setCopy(false)
        }, 2000);
    }
    return (
        <footer className="card-footer">
            <a target={'_blank'} href='https://github.com/spuckhafte' className='brand github'><FaGithubSquare /></a>
            <a target={'_blank'} href='https://instagram.com/spuckhafte' className='brand instagram'><FaInstagramSquare /></a>
            <span onClick={copy} className='brand google'><FaGoogle />
            <span className={`tooltip ${!copied && 'hide'}`}>Gmail address copied!</span>
            </span>
            <a target={'_blank'} href='https://www.facebook.com/rakshit.joshi.33821/' className='brand facebook'><FaFacebookSquare /></a>
            <a target={'_blank'} href='https://twitter.com/spuckhafte' className='brand twitter'><FaTwitterSquare /></a>
        </footer>
    )
}