import React from 'react'
import styles from "./Navbar.module.css"
import setting from '../../img/settings-17-32.png'
import light from '../../img/light-bulb-2-32.png'
import translate from '../../img/google-translate-32.png'
import { useTranslation } from 'react-i18next';
function Navbar(props) {

    const { t } = useTranslation();
    return (
        <div className={styles.navbar}>
            <span className={styles.button}>{t('Navbar')}
            <label className={styles.switch}>
            <input type="checkbox" onChange={()=>!props.contactsVisible ? props.setContactsVisible(true) : props.setContactsVisible(false)}/>
            <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            </span>
            <button onClick={()=>props.handleClick('ru')} >
            ru
          </button>
          <button onClick={()=>props.handleClick('en')} >
            en
         </button>
            <div className={styles.links}>
            <img src={setting} className={styles.setting} onClick={()=> !props.settingVisible ? props.setSettingVisible(true) : props.setSettingVisible(false)}/>
            <div className={props.settingVisible ? styles.settingDiv : styles.settingDivActive}>
           <button className={styles.settingButtonOne} onClick={()=> props.darkVisible ? props.setDarkVisible(false) : props.setDarkVisible(true)}> <img src={light} className={styles.settings}/></button>
           <button className={styles.settingButtonTwo}><img src={translate} className={styles.settings} /></button>
            </div>
            </div>
        </div>
    )
}

export default Navbar
