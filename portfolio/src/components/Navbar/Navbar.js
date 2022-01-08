import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import stylesDark from "./NavbarDark.module.css"
import setting from '../../img/settings-17-32.png'
import setting2 from '../../img/settings-17-32 (1).png'
import light from '../../img/light-bulb-2-32.png'
import lightDark from '../../img/light2.png'
import lightSun from '../../img/light1.png'
import translate from '../../img/google-translate-32.png'
import translate2 from '../../img/google-translate-32 (1).png'
import { useTranslation } from 'react-i18next';
function Navbar(props) {

    const { t } = useTranslation();
const[translateVis, setTranslateVis]=useState(false)
const[lightVis, setLightlateVis]=useState(false)





    return (
        <div className={styles.navbar}>
            <span className={!props.darkVisible ? styles.button : stylesDark.button}>{t('Navbar')}
            <label className={styles.switch}>
            <input type="checkbox" onChange={()=>!props.contactsVisible ? props.setContactsVisible(true) : props.setContactsVisible(false)}/>
            <span className={!props.darkVisible ? (`${ styles.slider} ${styles.round}`) : (`${ stylesDark.slider} ${stylesDark.round}`)}></span>
            </label>
            </span>

            <div className={styles.links}>
            <img src={!props.darkVisible ? setting : setting2} className={styles.setting} onClick={()=> !props.settingVisible ? props.setSettingVisible(true) : props.setSettingVisible(false)}/>
            <div className={props.settingVisible ? (!props.darkVisible ? styles.settingDiv : stylesDark.settingDiv) : (!props.darkVisible ? styles.settingDivActive : stylesDark.settingDivActive)}>
           <button className={!props.darkVisible ? styles.settingButtonOne : stylesDark.settingButtonOne}onMouseMove={()=>setLightlateVis(true)} > <img src={props.darkVisible ? lightSun : light} className={styles.settings}/></button>
           <button className={!props.darkVisible ?  styles.settingButtonTwo : stylesDark.settingButtonTwo} onMouseMove={()=>setTranslateVis(true)}><img src={!props.darkVisible ? translate : translate2 } className={styles.settings} /></button>
            </div>

            <div onMouseLeave={()=>setTranslateVis(false)} className={translateVis ? (!props.darkVisible ? styles.translateDiv : stylesDark.translateDiv) : (!props.darkVisible ? styles.translateDivHidden : stylesDark.translateDivHidden)}>
            <button className={!props.darkVisible ? styles.translatebuttonRU : stylesDark.translatebuttonRU} onClick={()=>props.handleClick('ru')} >
            ru
          </button>
          <button className={ !props.darkVisible ? styles.translatebuttonEN : stylesDark.translatebuttonEN} onClick={()=>props.handleClick('en')} >
            en
         </button>
            </div>

            <div onMouseLeave={()=>setLightlateVis(false)} className={lightVis ? (!props.darkVisible ? styles.lightDiv : stylesDark.lightDiv ) : (!props.darkVisible ? styles.lightDivHidden : stylesDark.lightDivHidden)}>
            <button className={!props.darkVisible ? styles.lightbuttonRU : stylesDark.lightbuttonRU} onClick={()=> props.setDarkVisible(true)} >
            <img src={lightDark} className={styles.lightSun}/>
          </button>
          <button className={!props.darkVisible ? styles.lightbuttonEN : stylesDark.lightbuttonEN} onClick={()=>props.setDarkVisible(false)} >
          <img src={light} className={styles.lightDark}/>
         </button>
            </div>

            </div>
        </div>
    )
}

export default Navbar
