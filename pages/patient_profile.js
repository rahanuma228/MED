import React from 'react'
import styles from '../styles/Homepage.module.css'
import styles1 from '../styles/Home.module.css'

const patient_profile = () => {
  return (
    
    < div class={styles1.page} >
    <nav className={styles1.nav}>
      <div class={styles1.logo}>
          <p>MEDIPAL</p>
      </div>
     
     <a href="/signup">SIGN UP</a>
     <a href="/login">LOGIN</a>
     <a href="/hospitals">HOSPITALS</a>
     <a href="/services">SERVICES</a>
     <a href="/">ABOUT US</a>
     <a href="/homepage">Home</a>
     
    </nav>
    
     <div class={styles1.foot}>
          <div class={styles1.logo2} >
           <p>MEDIPAL</p>
          </div>
          
          
          <p class={styles1.im7}>Leading the way in Medical Execellence, Trusted Care.</p>
         <p class={styles1.im8}>For feedback or concerns, please email us at queries@hospals.com</p>
         
       </div>
       </div>
  )
}
export default patient_profile