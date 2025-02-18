import React,{ useEffect,useState } from 'react';
import * as styles from "./CategoryBlock.module.css"
import FolderIcon from "@/assets/icons/folder.svg?react"
import { fetchCategories } from "@/api/category";

export default function CategoryBlock(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetchCategories()
        .then((result)=>{
            setData(result)
        })
    },[])
    
    return(
        <div className={styles.container}>
            <div className={styles.title}>CATEGORY</div>
            <hr color="gray"/>
            <div className={styles.categoryWrap}>
            {
                data.map(e=>
                    <div className={styles.categoryRow}>
                        <a href={`/category/${e.name}`}>
                        <FolderIcon className={styles.folderIcon}/>{e.name}
                        </a>
                    </div>
                )
            }
            </div>
        </div>
        )
}