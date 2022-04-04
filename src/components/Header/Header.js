import React from 'react'
import {ReactComponent as DesignSvg} from '../../images/design.svg'

export default function Header() {
  return (
    <header className='flex' data-aos="fade-left">
      <aside className='flex__border'>
      <hr className='linerule' />
      <p className='linerule__text'>Tobiloba Arotimi</p>
      </aside>
      <div className='flex__border__container'>
            <section className='flex__border__container__1'>
                <h2>Hello, my name's Tobi.I'm a Frontend</h2>
                  <div data-aos="flip-up">
                    <p>Developer.</p>
                  </div>
            </section>
         
          <div className="flex__border__container__1__2"> 
            <DesignSvg className="flex__border__container__1__2__img" />
            </div>
            </div>
    </header>
  )
}
