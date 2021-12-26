import React, { useEffect, useState } from "react";
import dataSlider from "./DataSlider";
import BtnSlider from "./BtnSlider";
import styles from "./Projects.module.css"
import Navbar from '../Navbar/Navbar'
function Projects(props) {

    const [slideIndex, setSlideIndex] = useState(1);

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

      const moveDot = index => {
        setSlideIndex(index)
    }

    return (
  <div className={!props.contactsVisible ? styles.projects : styles.projectsTransform}>
         <Navbar setContactsVisible={props.setContactsVisible} contactsVisible={props.contactsVisible} />
         <div
      className={styles.containerSlider}>
         {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? styles.activeAnim : styles.slide
            }
          >
            <img className={styles.img} src={process.env.PUBLIC_URL + `/Imgs/${index + 1}.png`} />
            <h3 className={styles.title}>{obj.title}</h3>
           <div className={styles.container}>
            <div className={styles.headingContainer}>
           <h4 className={styles.headline}>link:</h4> 
           <h4 className={styles.headline}>kod:</h4>
           <h4 className={styles.headline}>technology stack:</h4>
           <h4 className={styles.headline}>description:</h4>
            </div>
            <div className={styles.descriptionContainer}> 
            <span className={styles.span}><p>{obj.link}</p></span>
            <span className={styles.span}><p>{obj.kod}</p></span> 
            <span className={styles.span}><p>{obj.technologyStack}</p></span> 
            <span className={styles.span}><p>{obj.description}</p></span> 
            </div>   </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className={styles.containerDots}>
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? styles.dotActive : styles.dot}
                    ></div>
                ))}
            </div>

        </div>
        </div>
    )
}

export default Projects
