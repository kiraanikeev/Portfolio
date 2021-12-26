import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css"
function Navbar(props) {

  

    return (
        <div className={styles.navbar}>
            <span className={styles.button}>Contacts
            <label className={styles.switch}>
            <input type="checkbox" onChange={()=>!props.contactsVisible ? props.setContactsVisible(true) : props.setContactsVisible(false)}/>
            <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            </span>
      
            <div className={styles.links}>
            <NavLink to="/about" className={styles.link}>About</NavLink>
            <NavLink to="/" className={styles.link}>Projects</NavLink>
            </div>
        </div>
    )
}

export default Navbar
