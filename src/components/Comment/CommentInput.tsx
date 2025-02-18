import React from "react";
import * as styles from "./CommentInput.module.css"

export default function GuestBookPage(){
    const handleSubmit = () => {
        alert("준비중입니다.")
    }
    return(
        <div className={styles.container}>
            <div className={styles.authFields}>
                <input type="text" className={styles.nameInput} placeholder="이름"/>
                <input type="password" className={styles.passwdInput} placeholder="비밀번호"/>
            </div>
            <div>
                <textarea type="text" className={styles.commentInput} placeholder="내용을 입력하세요."/>
            </div>
            
            <div>
                <button className={styles.submit}
                        onClick={handleSubmit}>등록</button>
            </div>
        </div>
        )
}