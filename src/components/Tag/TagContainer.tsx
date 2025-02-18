import React from "react";
import * as styles from "./TagContainer.module.css"

interface ITag{
    id:number;
    keyword:string;
}
const tags = [
  { "id": 1, "keyword": "JavaScript" },
  { "id": 2, "keyword": "TypeScript" },
  { "id": 3, "keyword": "React" },
  { "id": 4, "keyword": "Next.js" },
  { "id": 5, "keyword": "Node.js" },
  { "id": 6, "keyword": "Express" },
  { "id": 7, "keyword": "NestJS" },
  { "id": 8, "keyword": "Vue.js" },
  { "id": 9, "keyword": "Nuxt.js" },
  { "id": 10, "keyword": "Svelte" },
  { "id": 11, "keyword": "SolidJS" },
  { "id": 12, "keyword": "Python" },
  { "id": 13, "keyword": "Django" },
  { "id": 14, "keyword": "Flask" },
  { "id": 15, "keyword": "FastAPI" },
  { "id": 16, "keyword": "Java" },
  { "id": 17, "keyword": "Spring Boot" },
  { "id": 18, "keyword": "Kotlin" },
  { "id": 19, "keyword": "Android 개발" },
  { "id": 20, "keyword": "iOS 개발" },
  { "id": 21, "keyword": "Swift" },
  { "id": 22, "keyword": "Flutter" },
  { "id": 23, "keyword": "React Native" },
  { "id": 24, "keyword": "웹 개발" },
  { "id": 25, "keyword": "프론트엔드" },
  { "id": 26, "keyword": "백엔드" },
  { "id": 27, "keyword": "풀스택 개발" },
  { "id": 28, "keyword": "데이터베이스" },
  { "id": 29, "keyword": "MySQL" },
  { "id": 30, "keyword": "PostgreSQL" },
  { "id": 31, "keyword": "MongoDB" },
  { "id": 32, "keyword": "Redis" },
  { "id": 33, "keyword": "API 개발" },
  { "id": 34, "keyword": "GraphQL" },
  { "id": 35, "keyword": "REST API" },
  { "id": 36, "keyword": "Three.js" },
  { "id": 37, "keyword": "웹 성능 최적화" },
  { "id": 38, "keyword": "보안" },
  { "id": 39, "keyword": "CI/CD" },
  { "id": 40, "keyword": "Docker" },
  { "id": 41, "keyword": "Kubernetes" },
  { "id": 42, "keyword": "GitHub Actions" },
  { "id": 43, "keyword": "클라우드 컴퓨팅" },
  { "id": 44, "keyword": "AWS" },
  { "id": 45, "keyword": "GCP" },
  { "id": 46, "keyword": "Azure" },
  { "id": 47, "keyword": "서버리스" },
  { "id": 48, "keyword": "마이크로서비스" },
  { "id": 49, "keyword": "웹소켓" },
  { "id": 50, "keyword": "웹 접근성" }
]

export default function TagPage(){
    return(
        <div className={styles.container}>
            {
                tags.map(e=>
                    <div className={styles.tag}>
                    <a href={`/tag/${e.keyword}`}>
                        {e.keyword}
                    </a>
                    </div>
                )
            }
        </div>
        )
}