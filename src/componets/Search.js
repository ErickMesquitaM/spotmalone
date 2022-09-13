import React, { useEffect } from "react";

export default function Search(props){
    
    
    useEffect(()=>{

        let elem = document.getElementById(props.page)
        let img = document.getElementById(props.page + 'Img')
        img.src = img.src.replace("Actived", '')
        elem.classList.remove("linkActive")

        props.setPage('search')
    })

    return(
        <main>
            <h1>Search</h1>
        </main>
    )
}