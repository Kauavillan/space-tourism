import styles from "./IndexContent.module.css";
import { Link } from "react-router-dom";
import background from "./Background";
function IndexContent(){
    window.onload = background("homepage");
    return(
            <section className={styles.content}>
                <div>  
                    <span><p>So, you want to travel to</p></span>
                    <h1>Space</h1>
                    <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <Link to="destination"><button>Explore</button></Link>
            </section>
    )
}

export default IndexContent;