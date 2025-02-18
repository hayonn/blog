import React from "react";
import CommentInput from "@/components/Comment/CommentInput"
import CommentList from "@/components/Comment/CommentList"
import ProfileBlock from "@/components/Common/ProfileBlock";

export default function GuestBookPage(){
    return(
        <>
            <ProfileBlock name="Seo Hayoen"
                          github="hayonn"
                          email="seohayeon.kr@gmail.com" 
                          avatar="https://avatars.githubusercontent.com/u/190105697?s=400&u=43e6fbe9b66f60c570e0caccba86541486254573&v=4"/>
            <CommentInput/>
            <CommentList/>
        </>
        )
}