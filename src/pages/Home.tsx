import React,{useState} from "react";
import ListBlock from "@/components/Home/List"
import TagBar from "@/components/Home/TagBar"
import ProfileBlock from "@/components/Common/ProfileBlock";

export default function HomePage(){
    const [tag, setTag] = useState<string>(null)
    return(
        <>
            <ProfileBlock name="Seo Hayoen"
                          github="hayonn"
                          email="seohayeon.kr@gmail.com" 
                          avatar="https://avatars.githubusercontent.com/u/190105697?s=400&u=43e6fbe9b66f60c570e0caccba86541486254573&v=4"/>
            <TagBar tag={tag}
                    setTag={setTag}/>
            <ListBlock tag={tag}/>
        </>
        )
}