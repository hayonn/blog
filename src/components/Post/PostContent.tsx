import React from "react";
import * as styles from "./PostContent.module.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PostContent({content}){
    
    return(
        <div className={styles.wrap}>
            <Markdown remarkPlugins={[remarkGfm]}>
                {content}
            </Markdown>
        </div>
        )
}