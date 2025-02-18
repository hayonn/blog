import React, {useEffect, useState} from "react";
import PostHeader from "@/components/Post/PostHeader";
import PostContent from "@/components/Post/PostContent";
import { fetchPostById } from "@/api/post";
import CommentInput from "@/components/Comment/CommentInput"
import CommentList from "@/components/Comment/CommentList"
import PostMenu from "@/components/Post/PostMenu"

interface IPost{
    id:number;
    title:string;
    content:string;
    category:string;
    createdAt:Date;
    like:number;
    tag:string[];
}

export default function PostPage(){
    const [data, setData] = useState()
    useEffect(()=>{
        fetchPostById(1)
        .then((result)=>{
            setData(result)
        })
    },[])
    if(!data) return null
    else 
    return(
        <div className="postContainer">
            <PostHeader title={data.title}
                        category={data.category}
                        createdAt={data.createdAt}/>
            <PostContent content={data.content}/>
            
            <PostMenu/>
            <CommentList/>
            <CommentInput/>
        </div>
        )
}