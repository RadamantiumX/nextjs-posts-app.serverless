import React, { Suspense } from "react"
import { ListOfPosts } from "./ListOfPosts"

// El nombre por defecto en la RUTA siempre tiene q ser page.jsx
export default async function PostsPage() {
    

    return (
        <section>
            {/**Suspende la carga a nivel de RUTA */}
          <Suspense fallback={<p>Cargando Posts....</p>}>
           <ListOfPosts/>
           </Suspense>
        </section>
    )
}