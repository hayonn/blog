import React from "react";
import * as styles from "./PostHeader.module.css";
import { dateFormat } from "@/utils";

export default function PostHeader({
    title,
    category,
    createdAt
}){
    
    
    return(
        <div className={styles.wrap}>
            <div className={styles.category}>{category}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{dateFormat(createdAt)}</div>
        </div>
        )
}