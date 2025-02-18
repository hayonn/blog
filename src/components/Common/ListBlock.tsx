import React, {useState,useEffect} from "react"
import ListItem from "@/components/Common/ListItem"
import * as styles from "./ListBlock.module.css"
import { fetchPostsByTag, fetchPostsByCategory } from "@/api/post"
import Pagenation from "@/components/Common/Pagenation"

export default function ListBlock({name,type}){
    const [data, setData] = useState([])
    useEffect(()=>{
        if(type=="tag"){
            fetchPostsByTag(name)
            .then((result)=>{
                setData(result)
            })
        }else if(type=="category"){
            fetchPostsByCategory(name)
            .then((result)=>{
                setData(result)
            })
        }
    },[type,name])
    
    return(
        <div className={styles.container}>
            <div className={styles.listTitle}>{type=="tag"?"# ":""}{name}</div>
            {
                data.map(e=>
                <>
                    <hr/>
                    <a href={`/post/${e.id}`}>
                        <ListItem title={e.title}
                              createdAt={e.createdAt}
                              thumbnail={e.thumbnail}
                              category={e.category}/>
                    </a>
                </>
                )
            }
            <hr/>
            <Pagenation current={1}
                        max={5}/>
        </div>
        )
}