import React from 'react'
import {ReactComponent as DesignSvg} from '../../images/design.svg'

export default function Header() {
  return (
    <div className='grid_container'>
            <div className='grid-container_1'>
                <h2>Hello, my name's Tobiloba.I'm a Frontend</h2>
                  <div data-aos="flip-up">
                    <p>Developer.</p>
                  </div>
            </div>
         
          <div className="grid-container_1_2"> 
            <DesignSvg className="img" />
            </div>
    </div>
  )
}
