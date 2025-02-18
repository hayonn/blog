import React, {useState} from "react";
import * as styles from "./PostMenu.module.css"
import LikeIcon from "@/assets/icons/like.svg?react"
import FaceBookIcon from "@/assets/icons/facebook.svg?react"
import XIcon from "@/assets/icons/x.svg?react"
import LinkIcon from "@/assets/icons/link.svg?react"
import LinkActive from "@/assets/icons/like-active.svg?react"

export default function PostMenu(){
    const tags = ["AES","암호화","Algorithm"];
    const [isLike, setIsLike] = useState(false)
    const handleLike = () => {
        setIsLike(prev=>!prev)
    }
    
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // 2초 후 메시지 숨기기
        } catch (err) {
          console.error("링크 복사 실패", err);
        }
    };
    
    return(
        <div className={styles.container}>
            <div>
                {
                    tags.map(e=>
                        <div className={styles.tagWrap}>
                        <a href={`/tag/${e}`}>
                            # {e}
                        </a>
                        </div>
                    )
                }
            </div>
            <div className={styles.util}>
                {
                    isLike?
                    <LinkActive width={20} height={20} fill="red" onClick={handleLike}/>
                    :<LikeIcon width={20} height={20} onClick={handleLike}/>
                }
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${"example.com"}`} target="_blank">
                    <FaceBookIcon width={20} height={20}/>
                </a>
                <a href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${"example.com"}&text=`} target="_blank">
                    <XIcon width={20} height={20}/>
                </a>
                <LinkIcon width={20} height={20} onClick={copyToClipboard}/>
                {copied && <span className={styles.copyMessage}>Copied to clipboard</span>}
            </div>
            <hr/>
        </div>
        )
}