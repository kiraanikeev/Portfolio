import React, { useEffect, useState } from "react";
import dataSlider from "./DataSlider";
import BtnSlider from "./BtnSlider";
import styles from "./Projects.module.css";
import stylesDark from "./ProjectsDark.module.css";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

function Projects(props) {
  const [slideIndex, setSlideIndex] = useState(1);
  const { t } = useTranslation();
  const dataSliderObj = t("dataSliderTrans", { returnObjects: true });
  useEffect(() => {
    const play = setInterval(() => {
      if (slideIndex !== dataSlider.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
      }
    }, 20000);
    return () => clearInterval(play);
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className={
        props.contactsVisible
          ? !props.darkVisible
            ? styles.projects
            : stylesDark.projects
          : !props.darkVisible
          ? styles.projectsTransform
          : stylesDark.projectsTransform
      }
    >
      <Navbar
        setContactsVisible={props.setContactsVisible}
        contactsVisible={props.contactsVisible}
        setSettingVisible={props.setSettingVisible}
        settingVisible={props.settingVisible}
        darkVisible={props.darkVisible}
        setDarkVisible={props.setDarkVisible}
        handleClick={props.handleClick}
      />
      <div
        className={
          !props.darkVisible
            ? !props.contactsVisible
              ? styles.containerSlider
              : styles.containerSliderHidden
            : !props.contactsVisible
            ? stylesDark.containerSlider
            : stylesDark.containerSliderHidden
        }
      >
        {dataSliderObj.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? styles.activeAnim : styles.slide
              }
            >
              <a href={obj.link}>
                <img
                  className={!props.darkVisible ? styles.img : stylesDark.img}
                  src={process.env.PUBLIC_URL + `/Imgs/${index + 1}.png`}
                />
              </a>
              <h3
                className={!props.darkVisible ? styles.title : stylesDark.title}
              >
                {obj.title}
              </h3>
              <div className={styles.container}>
                <div
                  className={
                    !props.darkVisible
                      ? styles.headingContainer
                      : stylesDark.headingContainer
                  }
                >
                  <div className={styles.span}>
                    <h4 className={styles.headline}>{t("Headline.link")}</h4>
                    <a
                      href={obj.link}
                      className={
                        !props.darkVisible ? styles.link : stylesDark.link
                      }
                    >
                      {obj.link}
                    </a>
                  </div>
                  <div className={styles.span}>
                    <h4 className={styles.headline}>{t("Headline.kod")}</h4>
                    <a
                      href={obj.kod}
                      className={
                        !props.darkVisible ? styles.link : stylesDark.link
                      }
                    >
                      {obj.kod}
                    </a>
                  </div>
                  <div className={styles.span}>
                    <h4 className={styles.headline}>
                      {t("Headline.description")}
                    </h4>
                    <p
                      className={
                        !props.darkVisible ? styles.textP : stylesDark.textP
                      }
                    >
                      {obj.description}
                    </p>
                  </div>
                  <div className={styles.span}>
                    <h4 className={styles.headline}>
                      {t("Headline.technology")}
                    </h4>
                    <p
                      className={
                        !props.darkVisible ? styles.textP : stylesDark.textP
                      }
                    >
                      {obj.technologyStack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className={styles.containerDots}>
          {Array.from({ length: 7 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1
                  ? !props.darkVisible
                    ? styles.dotActive
                    : stylesDark.dotActive
                  : !props.darkVisible
                  ? styles.dot
                  : stylesDark.dot
              }
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
