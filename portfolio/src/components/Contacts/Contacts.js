import React from 'react'
import styles from "./Contacts.module.css"
import point from '../../img/point-objects-32.png'
import foto from '../../img/1.jpg'
import download from '../../img/download-2-32.png'
import arrows from '../../img/undo-5-32.png'
// import telega from '../../img/telegram-32.png'
import git from '../../img/github-10-32.png'
import { useTranslation } from 'react-i18next';

function Contacts(props) {

    const { t } = useTranslation();

    return (
        <div className={props.contactsVisible ? styles.contacts : styles.hidden}>
             <img src={foto} className={styles.foto}/>  
             <div className={styles.section}>
             <h1  className={styles.name}>{t('Name.Name1')}</h1>
             <h1  className={styles.secondName}>{t('Name.Name2')}</h1>
             <h2  className={styles.phrase}>IS AN OKAY COOK</h2>
             </div><img src={arrows} 
            className={styles.arrows}/>

            <h3 className={styles.text_h3}><img src={download} 
            className={styles.download}/>{t('Contacts.resume')}</h3>
            <h3 className={styles.text_h3}><img src={git} 
            className={styles.git}/>{t('Contacts.git')}</h3>
            <h3 className={styles.textH3}><img src={point} 
            className={styles.point}/>{t('Contacts.location')}</h3>
            <h3 className={styles.textH3}>kiraanikeev@mail.ru</h3>
             <h3 className={styles.textH3}>+7 995 330 10 09</h3>
            <button className={styles.button}>{t('Contacts.hire')}</button>
            <div></div>
        </div>
    )
}

export default Contacts
