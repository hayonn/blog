import React, {useState,useEffect} from "react"
import ListItem from "@/components/Common/ListItem"
import * as styles from "./ListBlock.module.css"
import { fetchPosts } from "@/api/post"
import Pagenation from "@/components/Common/Pagenation"


export default function ListBlock(){
    const sortByDate = (data) => {
        const groupedData = data.reduce((acc, post) => {
          const date = new Date(post.createdAt);
          const year = date.getFullYear();
          const month = date.toLocaleString('en-US', { month: 'long' });
          const key = `${year}-${month}`;
        
          if (!acc[key]) acc[key] = { year, month, posts: [] };
          acc[key].posts.push(post);
        
          return acc;
        }, {});
        
        const result = Object.values(groupedData);
        return result
    }
    
    const [data, setData] = useState([])


    useEffect(()=>{
        fetchPosts()
        .then((result)=>{
            setData(sortByDate(result))
            console.log(sortByDate(result))
        })
    },[])
    
    return(
        <div className={styles.container}>
            {
                data.map(item=>
                    <>
                    <div className={styles.listTitle}>
                        {item.month}, {item.year}
                    </div>
                    {item?.posts.map(e=>
                        <>
                            <hr/>
                            <a href={`/post/${e.id}`}>
                                <ListItem title={e.title}
                                      createdAt={e.createdAt}
                                      thumbnail={e.thumbnail}
                                      category={e.category}/>
                            </a>
                        </>
                    )}
                    </>
                )
            }
            <hr/>
            <Pagenation current={1}
                        max={5}/>
        </div>
        )
}