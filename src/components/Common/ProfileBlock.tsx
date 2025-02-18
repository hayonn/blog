import React from "react";
import * as styles from './ProfileBlock.module.css'
import GithubIcon from "@/assets/icons/github.svg?react"
import EmailIcon from "@/assets/icons/sms.svg?react"
import HomeIcon from "@/assets/icons/home.svg?react"
import TagIcon from "@/assets/icons/tag.svg?react"
import GuestBookIcon from "@/assets/icons/user-edit.svg?react"

interface ProfileBlockProps {
  name: string;
  github: string;
  email: string;
  avatar: string;
}

export default function ProfileBlock({
    name,
    github,
    email,
    avatar,
}:ProfileBlockProps){
    return( 
        <div className={styles.container}>
        <div className={styles.profileBlock}>
            <div className={styles.profileContent}>
                <div className={styles.name}><a href="/">{name}</a></div>
            </div>
            <div className={styles.avatar}>
            <a href="/">
            <img src={avatar} 
                   alt="아바타" 
                   width={200} 
                   height={200}
                   className={styles.avatarImg}/>
            </a>
            </div>
        </div>
        <hr/>
        <div className={styles.IntroduceWrap}>
            <div className={styles.introduce}>유사개발자</div>
            <div className={styles.IconsWrap}>
                <a href="/">
                    <HomeIcon width={25} height={25} className={styles.homeIcon}/>
                </a>
                <a href="https://github.com/hayonn" target="_blank">
                    <GithubIcon width={25} height={25} className={styles.icon}/>
                </a>
                <a href="mailto:seohayeon.kr@gmail.com">
                    <EmailIcon width={25} height={25} className={styles.smsIcon}/>
                </a>
                <a href="/tag">
                    <TagIcon width={25} height={25} className={styles.smsIcon}/>
                </a>
                <a href="/guestbook">
                    <GuestBookIcon width={25} height={25} className={styles.homeIcon}/>
                </a>
            </div>
        </div>
        <hr/>
        </div>
    )
}