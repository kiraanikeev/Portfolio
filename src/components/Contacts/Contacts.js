import React, { useState, useEffect } from "react";
import styles from "./Contacts.module.css";
import stylesDark from "./ContactsDark.module.css";
import point from "../../img/point-objects-32.png";
import point2 from "../../img/point-objects-32 (1).png";
import foto from "../../img/1.jpg";
import download from "../../img/download-2-32.png";
import download2 from "../../img/download-2-32 (1).png";
import arrows from "../../img/undo-5-32.png";
import arrows2 from "../../img/undo-5-32 (1).png";
import git from "../../img/github-10-32.png";
import git2 from "../../img/github2.png";
import { useTranslation } from "react-i18next";
import resume from "../../img/Anikeev Kirill.pdf";

function Contacts(props) {
  const { t } = useTranslation();
  const PhrasesObj = t("Phrases", { returnObjects: true });
  const [phrases, setPhrases] = useState(t("Phrase1"));
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }

  const handlePhrase = (e) => {
    let randomElement = getRandomElement(e);
    setPhrases(randomElement);
  };

  useEffect(() => {
    const play = setInterval(() => {
      setPhrases(PhrasesObj[Math.floor(Math.random() * PhrasesObj.length)]);
    }, 9000);
    return () => clearInterval(play);
  }, [phrases]);

  return (
    <div
      className={
        props.contactsVisible
          ? !props.darkVisible
            ? styles.contacts
            : stylesDark.contacts
          : !props.darkVisible
          ? styles.hidden
          : stylesDark.hidden
      }
    >
      <img
        src={foto}
        className={!props.darkVisible ? styles.foto : stylesDark.foto}
      />
      <div className={styles.section}>
        <h1 className={!props.darkVisible ? styles.name : stylesDark.name}>
          {t("Name.Name1")}
        </h1>
        <h1
          className={
            !props.darkVisible ? styles.secondName : stylesDark.secondName
          }
        >
          {t("Name.Name2")}
        </h1>
        <h2 className={!props.darkVisible ? styles.phrase : stylesDark.phrase}>
          {PhrasesObj[Math.floor(Math.random() * PhrasesObj.length)]}
          <span className={styles.blink}>&#9612;</span>
        </h2>
      </div>
      <img
        src={!props.darkVisible ? arrows : arrows2}
        className={styles.arrows}
        onClick={() => handlePhrase(PhrasesObj)}
      />

      <h3 className={!props.darkVisible ? styles.text_h3 : stylesDark.text_h3}>
        <img
          src={!props.darkVisible ? download : download2}
          className={styles.download}
        />
        <a
          href={resume}
          download=""
          className={!props.darkVisible ? styles.resume : stylesDark.resume}
        >
          {t("Contacts.resume")}
        </a>
      </h3>
      <h3 className={!props.darkVisible ? styles.text_h3 : stylesDark.text_h3}>
        <a
          href="https://github.com/kiraanikeev"
          className={!props.darkVisible ? styles.resume : stylesDark.resume}
        >
          <img src={!props.darkVisible ? git : git2} className={styles.git} />
          {t("Contacts.git")}
        </a>
      </h3>
      <h3 className={!props.darkVisible ? styles.textH3 : stylesDark.textH3}>
        <img
          src={!props.darkVisible ? point : point2}
          className={styles.point}
        />
        {t("Contacts.location")}
      </h3>
      <h3 className={!props.darkVisible ? styles.textH3 : stylesDark.textH3}>
        kiraanikeev@mail.ru
      </h3>
      <h3 className={!props.darkVisible ? styles.textH3 : stylesDark.textH3}>
        +7 995 330 10 09
      </h3>
    </div>
  );
}

export default Contacts;
