import React,{ useEffect,useState } from "react";
import * as styles from "./List.module.css";
import { dateFormat } from "@/utils";
import { fetchPosts, fetchPostsByTag } from "@/api/post";
import SkeletonUI from "@/components/Common/SkeletonUI";

interface IPost{
    id:number;
    title:string;
    thumbnail:string;
    category:string;
    createdAt:Date;
}

export default function ListBlock({tag}){
    const [postList, setPostList] = useState([])
    const [loding, setLoding] = useState(true)
    useEffect(()=>{
        if(tag){
            fetchPostsByTag(tag)
            .then((result)=>{
                setPostList(result)
            })
        }else{
            fetchPosts()
            .then((result)=>{
                setLoding(false)
                setPostList(result)
            })
        }
    },[tag])
    
    return(
        loding?
        <SkeletonUI/>
        :
        <>
        <div className={styles.list_container}>
            {
                postList.map(e=>
                    <div className={styles.postItem}>
                        <a href={`/post/${e.id}`}>
                        <div className={styles.thumbnailWrap}>
                            <img src={e.thumbnail}/>
                        </div>
                        <div className={styles.categoryWrap}>
                            {e.category}
                        </div>
                        <div className={styles.titleWrap}>
                            {e.title}
                        </div>
                        <div className={styles.date}>
                            {dateFormat(e.createdAt)}
                        </div>
                        </a>
                    </div>
                )
            }
        </div>
        <div className={styles.archiveBlock}>
            <button>
                <a href={tag?"/tag/"+tag:"/archive"}>View Archive</a>
            </button>
        </div>
        </>
        )
}