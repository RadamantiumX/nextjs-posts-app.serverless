// Rutas dinamicas
// Mostramos un POST
import Link from "next/link"
import React from "react"

const fetchSinglePost = (id) =>{ // Hacemos FETCH al post con la ID 
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        // Revalidamos el FETCH cada 60 segundos
        next:{
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Post({children, params}) {
    const { id } = params
    const post = await fetchSinglePost(id)
    return <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/**Ponemos una ruta anidada en la carpeta /comments */}
        <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
        {children}
    </article>
}