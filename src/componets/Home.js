import React, { useEffect } from "react";
import './css/home.css'

export default function Home(props){

    const albums = [
        'Hollywoods Bleeding',
        'Beerbongs & Bentleys',
        'Stoney',
        'Twelve Carat Toothache',
        'This Is Post Malone',
        'Motley Crew'
    ]

    const rocomendade = [
        {
            title: 'Hollywoods Bleeding',
            desc: 'Post Malone'
        }, {
            title: 'Stoney',
            desc: 'Post Malone'
        }, {
            title: 'Top 50 Global',
            desc: 'Post Malone'
        }, {
            title: 'Top Gaming Tracks',
            desc: 'Post Malone'
        }, {
            title: 'Motley Crew',
            desc: 'Post Malone'
        }
    ]
    
    useEffect(()=>{

        let elem = document.getElementById(props.page)
        let img = document.getElementById(props.page + 'Img')
        img.src = img.src.replace("Actived", '')
        elem.classList.remove("linkActive")

        props.setPage('home')
    })

    let date = new Date()
    let hour = date.getHours()
    let greeting = null

    if(hour < 6){
        greeting = "Boa madrugada"
    } else if(hour < 12){
        greeting = "Bom dia"
    } else if(hour < 19){
        greeting = "Boa tarde"
    } else  if(hour < 24){
        greeting = "Boa noite"
    } else {
        greeting = "Oopa"
    }

    return(
        <main className="pageHome">

            <div className="topHome">
                <div className="user">
                    <img src="./assets/user/user.jpg" alt="" className="imgUser" />
                    Alguém
                </div>
            </div>

            <section className="bg-gradient">
              <h1 className="greeting">{greeting}</h1>

              <ul className="lastPlayed">

                  { albums.map((album)=>{
                      return(
                          <li className="itemLastPlayed">
                            <img src={`./assets/images/${album}.png`} alt="" className="imgAlbum" />
                            {album}
    
                            <button className="playAlbum">
                              <img src="./assets/icons/play.png" alt="" className="imgBtnPlayAlbum" />
                            </button>
                          </li>
                        )
                    }) }
                </ul>
        
            </section>

            <h2 className="recomendade">Recomendado para hoje</h2>

            <ul className="recomendadeList">

                { rocomendade.map((album)=>{
                    return(
                      <li className="itemRecomendadeList">
                        <img src={`./assets/images/${album.title}.png`} alt="" className="imgRecomendade" />
                        <h5 className="titleRecomendade">{album.title}</h5>
                        <p className="descRecomendade">{album.desc}</p>

                        <button className="playAlbum">
                          <img src="./assets/icons/play.png" alt="" className="imgBtnPlayAlbum" />
                        </button>
                      </li>
                    )
                }) }
                
            </ul>

        </main>
    )
}