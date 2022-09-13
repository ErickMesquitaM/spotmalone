import React, { useEffect } from "react";

export default function Library(props){
    
    
    useEffect(()=>{

        let elem = document.getElementById(props.page)
        let img = document.getElementById(props.page + 'Img')
        img.src = img.src.replace("Actived", '')
        elem.classList.remove("linkActive")

        props.setPage('library')
    })

    return(
        <main>
            <h1>Biblioteca</h1>
        </main>
    )
}