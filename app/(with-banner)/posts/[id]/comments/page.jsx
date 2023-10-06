// Ruta dinamica
// Mostramos los comentarios del POST
import Link from "next/link"
import React from "react"
import Image from "next/image"

const fetchComments = async (id) =>{ // Hacemos FETCH al post con la ID 
    await new Promise(resolve => setTimeout(resolve, 3000)) // Suspendemos la carga del FETCH a nivel de componente
   // throw new Error('Error al cargar los comentarios...') // Ante cualquier error
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
        <ul style={{marginTop:'20px;',background: '#444;',fontSize: '12px;'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <Image alt={comment.name} width={100} height={100} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`}/>
                    <h2>{comment.name}</h2>
                    <small>{comment.body}</small>
                </li>
            ))}
        </ul>
    )
}