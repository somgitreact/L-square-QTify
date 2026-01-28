import React from 'react'

import { Link } from 'react-router-dom'
import Feedbackbtn from './feedback/Feedbackbtn'

const Header = ({children}) => {
  return (
    <div className='bg-green-500 px-3.5 py-2.5 justify-between items-center flex '>
      <Link to='/' ><img src='logoq.png' alt="qtfy" /></Link> 
{children}
       <Feedbackbtn text='Give Feedback' />
    </div>
  )
}

export default Header