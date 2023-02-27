import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
function Link({to, number, title}){
    return(
        <NavLink to={to} className={({isActive})=> {return (isActive ? styles.active : styles.normal)}}><li><span>{number}</span> {title}</li></NavLink>
    )
}

export default Link;