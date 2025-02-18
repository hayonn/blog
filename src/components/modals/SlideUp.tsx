import * as styles from './SlideUp.module.css'
import React,{useRef} from "react"

type Props = {
  isOpen:boolean;
  children?: React.ReactNode;
};

export default function SlideUp({isOpen,children}:Props){
    const modalRef = useRef()
    
    return(
        <div className={`${styles.container} ${isOpen?styles.open:styles.closeModal}`} ref={modalRef}>
           {children}
        </div>
        )
}