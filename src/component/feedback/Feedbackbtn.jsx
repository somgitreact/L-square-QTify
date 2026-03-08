import React, { useState } from 'react'
import styles from './Feedbackbtn.module.css'
import Feedbackform from './Feedbackform'

const Feedbackbtn = ({text}) => {
  const [ showpop, setShowpop] = useState(false)
  return (
    <>
    <button className={styles.button} onClick={()=>setShowpop(true)}>{text}</button>
{showpop && <Feedbackform close={setShowpop}/>}
    </>
     
  )
}

export default Feedbackbtn