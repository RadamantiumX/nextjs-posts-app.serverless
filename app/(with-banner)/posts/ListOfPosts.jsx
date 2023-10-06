import React from "react"
import { LikeButton } from "./LikeButton" // Importamos evento de boton 
import Link from "next/link"

const fetchPosts = () =>{
    return fetch('https://jsonplaceholder.typicode.com/posts',{next:{
        revalidate: 60
    }})// revalidate, cada x segundos se revalida el fetch
      .then(res => res.json())
}

// El nombre por defecto en la RUTA siempre tiene q ser page.jsx
export async function ListOfPosts() {
    const posts = await fetchPosts()
    return posts.slice(0, 5).map(post=>(
                <article key={post.id}>
                {/** Primero va el segmento dinamico y despues la ruta como tal */}  
                <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                  <h2 style={{color:'#fc037b'}}>{post.title}</h2>
                  <p>{post.body}</p>
                  
                </Link>
                <LikeButton id={post.id}/>
                </article>
            ))
        
    
}