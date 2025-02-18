import React from "react"
import { dateFormat } from "@/utils"
import * as styles from "./ListItem.module.css"

export default function ListItem({
    title,
    createdAt,
    thumbnail,
    category
}){
    return(
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <img src={thumbnail}/>
            </div>
            <div className={styles.info}>
                <div className={styles.category}>{category}</div>
                <div className={styles.title}>{title}</div>
                <div className={styles.date}>{dateFormat(createdAt)}</div>
            </div>
        </div>
        )
}