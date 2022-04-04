import React from 'react'
import {FaGithub,FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
        <div className='footer'>
            <p className='footer__copyright'>Created by © Copyright<a href='https://github.com/thatseogirl'>Arotimi Tobiloba 2022!</a></p>
        </div>
        <div className='footer__copyright__social'>
            <p className='footer__copyright__social__p'>Get in touch</p>
            <FaLinkedin className='footer__copyright__social__p__favicon' href='https://www.linkedin.com/in/tobiloba-arotimi/'/>
            <FaGithub  className='footer__copyright__social__p__favicon' href='https://github.com/thatseogirl'/>
        </div>
    </footer>
  )
}
