import React from "react"
import { Link } from "react-router-dom";
import './css/nav.css'

export default function Nav(){
  return(
    <aside>
      <nav className="navBar">
        <img src="./assets/icons/options.png" alt="" className="iconNavBar" />

        <Link to="/" id="home">
            <img src="./assets/icons/home.png" alt="" className="iconNavBar" id="homeImg" />
            Início
        </Link> 

        <Link to="/search" id="search">
            <img src="./assets/icons/search.png" alt="" className="iconNavBar" id="searchImg" />
            Buscar
        </Link> 

        <Link to="/library" id="library">
            <img src="./assets/icons/library.png" alt="" className="iconNavBar" id="libraryImg" />
            Sua Biblioteca
        </Link> 

        <Link to="/aege">
            <img src="./assets/icons/newPlaylist.png" alt="" className="iconNavBar" />
            Criar playlist
        </Link> 

        <Link to="/musicliked">
            <img src="./assets/icons/songsLoved.png" alt="" className="iconNavBar" />
            Músicas Curtidas
        </Link> 

      </nav>

      <div className="line"></div>

    </aside>
  )
}