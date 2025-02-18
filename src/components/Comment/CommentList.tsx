import React from "react";
import * as styles from "./CommentList.module.css";
import { dateFormat } from "@/utils";
import Reply from "@/components/Comment/Reply"

interface IComment{
    id:number;
    name:string;
    content:string;
    createdAt:Date;
    
}

/*const data=[
    {
        id:1,
        name:"개발자",
        content:"안녕하세요 잘보고갑니다.",
        createdAt:new Date(),
        replies:[{id:4,name:"@hayonn",content:"감사합니다😎",createdAt:new Date(),isAdmin:true}]
    },{
        id:2,
        name:"로컬호스터",
        content:"안녕하세요. 혹시 블로그는 직접 만드신 건가요?",
        createdAt:new Date(),
        replies:[{id:4,name:"@hayonn",content:"네 NextJs로 만들었어요...! 감사합니다😎",createdAt:new Date(),isAdmin:true},{id:4,name:"로컬호스터",content:"헉.....",createdAt:new Date()}]
    },{
        id:3,
        name:"AstroBus",
        content:"Hi, How are you, im the hey, I invite u for my first invention.",
        createdAt:new Date()
    }]*/
const data = []

export default function CommentList(){
    const randomInt = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        return randomNumber;
    }
    return(
        <div className={styles.container}>
            {
                data.map(e=>
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
                        <Reply replies={e.replies}/>
                    </>
                )
            }
        </div>
        )
}