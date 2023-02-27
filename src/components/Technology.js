import background from "./Background";
import Title from "./Items/Title";
import { Container } from "./layout/ContentStyles";
import styles from "./Technology.module.css";
import { useEffect, useState } from "react";

import launchVehicleLan from "../assets/technology/image-launch-vehicle-landscape.jpg"
import launchVehiclePor from "../assets/technology/image-launch-vehicle-portrait.jpg"
import capsuleLandscapeLan from "../assets/technology/image-space-capsule-landscape.jpg"
import capsuleLandscapePor from "../assets/technology/image-space-capsule-portrait.jpg"
import spaceportLandscapeLan from "../assets/technology/image-spaceport-landscape.jpg"
import spaceportLandscapePor from "../assets/technology/image-spaceport-portrait.jpg"


function Technology (){
    window.onload = background("technology");

    const [technologyId, setTechnologyId] = useState(0);
    const data = require("../data.json");
    
    const {name, description} = data.technology[technologyId];

    const change = (id) => {
        setTechnologyId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.technology_selectors button');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active', `${styles.active}`);
		}
        list[technologyId].classList.add("active", `${styles.active}`);
    }, [technologyId]);

    const imageLandscape = () => {
        if(name === "Launch vehicle") {
            return launchVehicleLan;
        }else if(name === "Spaceport"){
            return spaceportLandscapeLan;
        }else{
            return capsuleLandscapeLan;
        }
    }
    const imagePortrait = () => {
        if(name === "Launch vehicle") {
            return launchVehiclePor;
        }else if(name === "Spaceport"){
            return spaceportLandscapePor;
        }else{
            return capsuleLandscapePor;
        }
    }
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);
      useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });


    return(
        <Container>
            <section className={styles.content}>
                <div>
                    <Title number="03" text="SPACE LAUNCH 101"/>
                    <div className={styles.mobile_image}>
                        {windowSize[0]<1000 ? <img src={imageLandscape()} alt="Technology"/> : <></>}
                    </div>
                    <div className={styles.technology_content}>
                        <div className={`${styles.technology_selectors} technology_selectors`}>
                            <button onClick={() => change(0)}>1</button>
                            <button onClick={() => change(1)}>2</button>
                            <button onClick={() => change(2)}>3</button>
                        </div>
                        <div  className={`${styles.technology_text} technology_text`}>
                            <h4>The terminology...</h4>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.desktop_image}>
                    {windowSize[0]>=1000 ? <img src={imagePortrait()} alt="Technology"/> : <></>}
                </div>
            </section>
        </Container>
    )
}

export default Technology;