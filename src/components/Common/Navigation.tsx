import React, { useState } from 'react';
import * as styles from "./Navigation.module.css"
import MenuIcon from "@/assets/icons/bars.svg?react"
import SlideUp from "@/components/modals/SlideUp"
import CategoryBlock from "@/components/Common/CategoryBlock"

export default function Navigation(){
    
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const handleModalOpen = () => {
        setIsOpen(prev=>!prev)
    }
    
    return(
        <div>
        <div className={styles.container}>
            <MenuIcon className={styles.menu} onClick={handleModalOpen}/>
        </div>
        <SlideUp isOpen={isOpen}>
            <CategoryBlock/>
        </SlideUp>
        </div>
        )
}