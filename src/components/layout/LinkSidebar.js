import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
function LinkSidebar({to, number, title}){
    return(
        <NavLink to={to} className={({isActive})=> {return (isActive ? styles.active : styles.normal)}}><li><span>{number}</span> {title}</li></NavLink>
    )
}

export default LinkSidebar;