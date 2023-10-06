'use client' // Componente de cliente

import React from "react"
import { useState } from "react"

export function LikeButton({id}) {
   const [liked, setLiked] = useState(false)
  
    return(
        <button style={{background:'green'}} onClick={()=>setLiked(!liked)}>
            {liked ? '💗 Te gusta': '❤ Me gusta'}
        </button>
    )
}