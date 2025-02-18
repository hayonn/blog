import React from "react";
import * as styles from "./Reply.module.css";
import { dateFormat } from "@/utils";

interface IReply{
    id:number;
    name:string;
    content:string;
    createdAt:Date;
    
}


export default function ReplyList({replies}){
    const randomInt = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        return randomNumber;
    }
    return(
        <div className={styles.container}>
            {replies?
                replies.map(e=>
                    <>
                        <div className={styles.commentWrap}>
                            <div className={styles.cmtProfile}>
                                {
                                e.isAdmin?
                                <>
                                    <div className={styles.avatar}>
                                    <img src="https://avatars.githubusercontent.com/u/190105697?s=400&u=43e6fbe9b66f60c570e0caccba86541486254573&v=4"/>
                                </div>
                                <div>
                                    <div>{e.name}</div>
                                    <div>{dateFormat(e.createdAt)}</div>
                                </div>
                                </>
                                :
                                <>
                                    <div className={styles.avatar}>
                                        <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=${randomInt()}`}/>
                                    </div>
                                    <div>
                                        <div>{e.name}</div>
                                        <div>{dateFormat(e.createdAt)}</div>
                                    </div>
                                </>
                            }
                            </div>
                            <div className={styles.content}>{e.content}</div>
                        </div>
                    </>
                )
            :null}
        </div>
        )
}