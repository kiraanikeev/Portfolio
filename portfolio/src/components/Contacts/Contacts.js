import React from 'react'
import styles from "./Contacts.module.css"
import point from '../../img/point-objects-32.png'
import foto from '../../img/1.jpg'
import download from '../../img/download-2-32.png'
// import telega from '../../img/telegram-32.png'
import git from '../../img/github-10-32.png'
function Contacts(props) {
    return (
        <div className={!props.contactsVisible ? styles.contacts : styles.hidden}>
             <img src={foto} className={styles.foto}/>
             <h1  className={styles.text_h1}>Kirill Anikeev</h1>
             <h2 className={styles.text_h2}>web developer</h2>
            <h3 className={styles.text_h3}><img src={download} 
            className={styles.download}/> download resume</h3>
            <h3 className={styles.text_h3}><img src={git} 
            className={styles.git}/> github</h3>
            <h3 className={styles.textH3}><img src={point} 
            className={styles.point}/>Kazan, Russia. Willing to relocate </h3>
            <h3 className={styles.textH3}>kiraanikeev@mail.ru</h3>
             <h3 className={styles.textH3}>+7 995 330 10 09</h3>
            <button className={styles.button}>hire me</button>
            <div></div>
        </div>
    )
}

export default Contacts
