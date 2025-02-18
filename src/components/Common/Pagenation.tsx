import React, {useState} from "react";
import styles from "./Pagenation.module.css"

export default function PageNation({current, max}){
    const [page, setPage] = useState("1")
    const handlePage = (e) => {
        setPage(e.target.value)
    }
    return (
        <div className={styles.container}>
            <a className={styles.prev}></a>
            <div className={styles.infoBlock}>
                <input type="number" 
                       onChange={handlePage}
                       value={page}
                       />
                <span>of {max}</span>
            </div>
            <a className={styles.next}></a>
        </div>
        )
}