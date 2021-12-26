import React from 'react'
import styles from "./About.module.css"
import Navbar from '../Navbar/Navbar'
function About(props) {

    return (
  <div className={!props.contactsVisible ? styles.about : styles.aboutTransform}>

            <Navbar setContactsVisible={props.setContactsVisible} contactsVisible={props.contactsVisible} />

        </div>
    )
}

export default About
