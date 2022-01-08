import { useState } from "react";
import styles from "./App.module.css"
import Contacts from "./components/Contacts/Contacts";
import Projects from "./components/Projects/Projects";
import i18next from 'i18next';

function App() {

const[contactsVisible, setContactsVisible] = useState(false)
const[settingVisible, setSettingVisible] = useState(true)
const[darkVisible, setDarkVisible] = useState(false)

function handleClick(lang) {
  i18next.changeLanguage(lang)
}

  return (
    <div className={darkVisible ? styles.appDark : styles.app}>
 <Contacts setContactsVisible={setContactsVisible} contactsVisible={contactsVisible}
setSettingVisible={setSettingVisible} settingVisible={settingVisible} 
darkVisible={darkVisible} setDarkVisible={setDarkVisible} handleClick={handleClick} />

<Projects  setContactsVisible={setContactsVisible} contactsVisible={contactsVisible}
setSettingVisible={setSettingVisible} settingVisible={settingVisible} 
darkVisible={darkVisible} setDarkVisible={setDarkVisible} handleClick={handleClick}/>


    </div>
  );
}

export default App;
