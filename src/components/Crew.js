import background from "./Background";
import Title from "./Items/Title";
import { Container } from "./layout/ContentStyles";
import styles from "./Crew.module.css";
import { useEffect, useState } from "react";

import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";


function Crew (){
    window.onload = background("crew");
    const [crewId, setCrewId] = useState(0);
    const data = require("../data.json");
    
    const {name, role, bio} = data.crew[crewId];

    const change = (id) => {
        setCrewId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.crew_selectors button', '.crew_selectors_mobile button');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active', `${styles.active}`);
		}
        list[crewId].classList.add("active", `${styles.active}`);
        list[crewId+4].classList.add("active", `${styles.active}`);
    }, [crewId]);

    const image = () => {
        if(name === "Douglas Hurley") {
            return douglas;
        }else if(name === "Mark Shuttleworth"){
            return mark;
        }else if(name === "Victor Glover"){
            return victor;
        }else{
            return anousheh;
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
                <div  className={`${styles.crew_text} crew_text`}>
                <Title number="02" text="MEET YOUR CREW"/>
                    <div>
                    {windowSize[0]<1000 ? <img src={image()} alt="Crew member" className={styles.crew_image_mobile}/> : <></>}
                   
                    <div className={`${styles.crew_selectors_mobile} ${styles.crew_selectors} crew_selectors`}>
                        <button onClick={() => change(0)}/>
                        <button onClick={() => change(1)}/>
                        <button onClick={() => change(2)}/>
                        <button onClick={() => change(3)}/>
                    </div> 
                        <h4>{role}</h4>
                        <h3>{name}</h3>
                        <p>{bio}</p>
                        
                        
                        <div className={`${styles.crew_selectors} crew_selectors`}>
                            <button onClick={() => change(0)}/>
                            <button onClick={() => change(1)}/>
                            <button onClick={() => change(2)}/>
                            <button onClick={() => change(3)}/>
                        </div>
                    </div>
                </div>
                
                {windowSize[0]>=1000 ? <img src={image()} alt="Crew member" className={styles.crew_image}/> : <></>}
               
            </section>
       </Container>
    )
}

export default Crew;