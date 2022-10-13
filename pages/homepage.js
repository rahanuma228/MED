import React from 'react'



import styles from '../styles/Homepage.module.css'
import styles1 from '../styles/Home.module.css'

const homepage = () => {
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
     
  
          
          <img src="hp6 - Copy.jpg" class={styles.im1}></img>
          <p class={styles.im2}>WELCOME TO MEDIPAL </p>
          <p class={styles.im3}>A GREAT PLACE TO RECEIVE CARE </p>
          <p class={styles.im19}>MEDIPAL offers wide range of diagnosis services and treaments. MEDIPAL helps connecting the</p>
          <p class={styles.im19}>patients with the most skilled and professional doctors. We keep you involved in available  </p>
          <p class={styles.im20}>treatment options and decisions about your treatment and care. </p>
          <div class={styles.im4}><a href="/">Learn More</a></div>

          <img src="hp5 - Copy.jpg" class={styles.im5}></img>
          
          <p class={styles.im6}>Care you can believe in </p>
          <p class={styles.im7}>Our Services </p>
          <img src="h7.png" class={styles.im8}></img>
          <p class={styles.im10}>A passion for putting patients first. </p>
          <img src="dot.png" class={styles.im11}></img>
          <p class={styles.im12}>Search doctors with ease </p>
          <img src="dot.png" class={styles.im11}></img>
          <p class={styles.im12}>Get an appointment </p>
          <img src="dot.png" class={styles.im11}></img>
          <p class={styles.im12}>Wide range of laboratories and hospitals </p>
          <img src="dot.png" class={styles.im13}></img>
          <p class={styles.im14}>5-Star Care</p>
          <img src="dot.png" class={styles.im13}></img>
          <p class={styles.im14}>Believe in Us</p>
          <img src="dot.png" class={styles.im13}></img>
          <p class={styles.im14}>Always Caring</p>
          <img src="hpf.png" class={styles.im15}></img>
          <p class={styles.im21}>MEDIPAL gives you 24/7 service. It gives you the perfect opportunity to connect to the best  </p>
          <p class={styles.im21}>available doctors. Any patient can get appointments online. Also they can view all the services  </p>
          <p class={styles.im21}>available across different hospitals and laboratories. Medipal offers wide range of diagnosis  </p>
          <p class={styles.im21}>services and treaments.MEDIPAL helps connecting the patients with the most skilled and   </p>
          <p class={styles.im21}> professional doctors. We keep you involved in available treatment options and decisions   </p>
          <p class={styles.im21}>about your treatment and care.</p>
          
          
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

export default homepage

