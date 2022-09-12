import React from "react"
import { Link } from "react-router-dom";
import './css/nav.css'

export default function Nav(){
  return(
    <aside>
      <nav className="navBar">
        <img src="./assets/icons/options.png" alt="" className="iconNavBar" />

        <Link to="/" className="linkActive">
            <img src="./assets/icons/home.png" alt="" className="iconNavBar" />
            Início
        </Link> 

        <Link to="/">
            <img src="./assets/icons/search.png" alt="" className="iconNavBar" />
            Buscar
        </Link> 

        <Link to="/">
            <img src="./assets/icons/library.png" alt="" className="iconNavBar" />
            Sua Biblioteca
        </Link> 

        <Link to="/">
            <img src="./assets/icons/newPlaylist.png" alt="" className="iconNavBar" />
            Criar playlist
        </Link> 

        <Link to="/">
            <img src="./assets/icons/songsLoved.png" alt="" className="iconNavBar" />
            Músicas Curtidas
        </Link> 

      </nav>

      <div className="line"></div>

    </aside>
  )
}