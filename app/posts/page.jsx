import React from "react"
import { ListOfPosts } from "./ListOfPosts"

// El nombre por defecto en la RUTA siempre tiene q ser page.jsx
export default async function PostsPage() {
    

    return (
        <section>
           <ListOfPosts/>
        </section>
    )
}