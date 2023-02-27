import Title from "./Items/Title";
import styles from "./Destination.module.css"
import { Container } from "./layout/ContentStyles";
import { useEffect, useState } from "react";
import background from "./Background";
import moon from "../assets/destination/image-moon.png"
import mars from "../assets/destination/image-mars.png"
import titan from "../assets/destination/image-titan.png"
import europa from "../assets/destination/image-europa.png"


function Destination (){
    window.onload = background("destination");
    const [destinationId, setDestinationId] = useState(0);
    const data = require("../data.json");
    
    const {name, description, distance, travel} = data.destinations[destinationId];
    
    const change = (id) => {
        setDestinationId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.destination_names span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active', `${styles.active}`);
		}
        list[destinationId].classList.add("active", `${styles.active}`);
    }, [destinationId]);

    const image = () => {
        if(name === "Moon") {
            return moon;
        }else if(name === "Mars"){
            return mars;
        }else if(name === "Europa"){
            return europa;
        }else{
            return titan;
        }
    }
    return(
        <Container>
            <section className={styles.content}>
                <div>
                    <Title number="01" text="PICK YOUR DESTINATION"/>
                
                    <img src={image()} alt="Planet destination"/>
                 </div>
                <div className={`${styles.destination_text} destination_text`}>
                    <div className={`${styles.destination_names} destination_names`}>
                        <span onClick={() => change(0)}>Moon</span>
                        <span onClick={() => change(1)}>Mars</span>
                        <span onClick={() => change(2)}>Europa</span>
                        <span onClick={() => change(3)}>Titan</span>
                    </div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <hr/>
                    <div className={styles.travel}>
                        <div>
                            <h4>avg. distance</h4>
                            <span>{distance}</span>
                        </div>
                        <div>
                            <h4>est. travel time</h4>
                            <span>{travel}</span>
                        </div>
                    </div>
                </div>

            </section>
        </Container>
    )
}

export default Destination;