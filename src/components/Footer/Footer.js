import React from 'react'
import {FaGithub,FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='animate__tada'>
        <div>
            <p>Created by © Copyright<a href='https://github.com/thatseogirl'>Arotimi Tobiloba 2022!</a></p>
        </div>
        <div>
            <p>Get in touch</p>
            <a href='https://www.linkedin.com/in/tobiloba-arotimi/'><FaLinkedin /></a>
            <a href='https://github.com/thatseogirl'><FaGithub /></a>
        </div>
    </footer>
  )
}
