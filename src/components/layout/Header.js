import logo from "./../../assets/shared/logo.svg";
import styles from "./Header.module.css";
import Link from "./Link"
import { useState } from "react";
import Sidebar from "./Sidebar";
import sidebarOpen from '../../assets/shared/icon-hamburger.svg'
function Header(){
    const [sidebar, setSidebar] = useState(false);
    const showSiderbar = () => setSidebar(!sidebar);
    return(
        
        <header className={styles.header}>
            <img src={logo} alt="Logo"/>
            <div className={styles.line}>
                <hr/>
            </div>
            <nav>
                <ul>
                    <Link to={"/"} number={"00"} title={"HOME"}/>
                    <Link to={"destination"} number={"01"} title={"DESTINATION"}/>
                    <Link to={"crew"} number={"02"} title={"CREW"}/>
                    <Link to={"technology"} number={"03"} title={"TECHNOLOGY"}/>
                </ul>
            </nav>
            {sidebar && <Sidebar active={setSidebar}/>}
            <img src={sidebarOpen} className={styles.sidebar}  alt="Open sidebar" onClick={showSiderbar}/>
        </header>
    )
}

export default Header;