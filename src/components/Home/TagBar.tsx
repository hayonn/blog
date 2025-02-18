import React from "react";
import * as styles from "./TagBar.module.css";

const tags = [
  { "id": 1, "keyword": "JavaScript" },
  { "id": 2, "keyword": "TypeScript" },
  { "id": 3, "keyword": "React" },
  { "id": 4, "keyword": "Next.js" },
  { "id": 5, "keyword": "Node.js" },
  { "id": 6, "keyword": "보안" },
  { "id": 7, "keyword": "Golang" },
  { "id": 8, "keyword": "백준" },
  { "id": 9, "keyword": "Python" }
]

export default function TagBar({ tag, setTag }){
    const handleSetTag = (keyword) => {
        if(!tag || tag != keyword) setTag(keyword)
        else setTag(null)
    }
    return(
        <div className={styles.wrap}>
            {
                tags.map(e=>
                    tag == e.keyword?
                    <div className={`${styles.tagWrap} ${styles.selected}`}
                         onClick={()=>handleSetTag(e.keyword)}>
                        # {e.keyword}
                    </div>
                    :<div className={styles.tagWrap}
                         onClick={()=>handleSetTag(e.keyword)}>
                        # {e.keyword}
                    </div>
                )
            }
        </div>
        )
}