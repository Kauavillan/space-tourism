import close from "../../assets/shared/icon-close.svg"
import LinkSidebar from "./LinkSidebar";
import styles from "./Sidebar.module.css"
function Sidebar({active}){
    const closeSidebar = () => active(false);
    return(
        <section className={styles.sidebar}>
           <span><img src={close} alt="Close" onClick={closeSidebar}></img></span>
                    <ul>
                        <LinkSidebar to={"/space-tourism"} number={"00"} title={"HOME"}/>
                        <LinkSidebar to={"destination"} number={"01"} title={"DESTINATION"}/>
                        <LinkSidebar to={"crew"} number={"02"} title={"CREW"}/>
                        <LinkSidebar to={"technology"} number={"03"} title={"TECHNOLOGY"}/>
                    </ul>
        </section>
    )
}
export default Sidebar;