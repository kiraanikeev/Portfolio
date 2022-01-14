import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Contacts from "./components/Contacts/Contacts";
import Projects from "./components/Projects/Projects";
import i18next from "i18next";

function App() {
  const [contactsVisible, setContactsVisible] = useState(false);
  const [settingVisible, setSettingVisible] = useState(true);
  const [darkVisible, setDarkVisible] = useState(false);

  function handleClick(lang) {
    i18next.changeLanguage(lang);
    const saveLanguage = JSON.stringify(lang);
    localStorage.setItem("language", saveLanguage);
  }

  useEffect(() => {
    const getDark = localStorage.getItem("dark");
    const loadedDark = JSON.parse(getDark);
    const getLanguage = localStorage.getItem("language");
    const loadedLanguage = JSON.parse(getLanguage);
    if (loadedDark) {
      setDarkVisible(loadedDark);
    }
    if (loadedLanguage) {
      i18next.changeLanguage(loadedLanguage);
    }
  }, []);

  useEffect(() => {
    const saveDark = JSON.stringify(darkVisible);
    localStorage.setItem("dark", saveDark);
  }, [darkVisible]);

  return (
    <div className={darkVisible ? styles.appDark : styles.app}>
      <Contacts
        setContactsVisible={setContactsVisible}
        contactsVisible={contactsVisible}
        setSettingVisible={setSettingVisible}
        settingVisible={settingVisible}
        darkVisible={darkVisible}
        setDarkVisible={setDarkVisible}
        handleClick={handleClick}
      />

      <Projects
        setContactsVisible={setContactsVisible}
        contactsVisible={contactsVisible}
        setSettingVisible={setSettingVisible}
        settingVisible={settingVisible}
        darkVisible={darkVisible}
        setDarkVisible={setDarkVisible}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
