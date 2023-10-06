// Ruta dinamica
// Mostramos los comentarios del POST
import Link from "next/link"
import React from "react"

const fetchComments = (id) =>{ // Hacemos FETCH al post con la ID 
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
        // Revalidamos el FETCH cada 60 segundos
        next:{
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Comments({params}) {
    const { id } = params
    const comments = await fetchComments(id) // Recuperamos los comentarios
    return (
        <ul>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h2>{comment.name}</h2>
                    <p>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}