import styles from "./Title.module.css";
export default function Title({number, text}){
    return <h2 className={styles.title}><span>{number}</span> {text}</h2>
}