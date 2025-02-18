import React from "react";
import styles from "./SkeletonUI.module.css";

const postList = [0,1,2,3,7,8]
export default function SkeletonUI(){
    return(
        <div className={styles.list_container}>
            {
                postList.map(e=>
                    <div className={styles.postItem}>
                        <div className={styles.thumbnailWrap}/>
                        <div className={styles.titleWrap}/>
                    </div>
                )
            }
        </div>
        )
}