import React from "react";
import './css/barMusic.css'

export default function BarMusic(){
    return(
        <section id="barMusic">
            
            <div className="music">
                <img src='./assets/images/Beerbongs & Bentleys.png' alt="" className="imgMusic" />
                <div className="dataMusic">
                    <h5>Better Now</h5>
                    <p>Post Malone</p>
                </div>
                <img src='./assets/icons/love.png' alt="" className="iconLove" />
            </div>

            <div className="controllerMusic">
                <div className="controlleitor">
                    <img src="./assets/controller/random.png" alt="" className="btnController" />
                    <img src="./assets/controller/prev.png" alt="" className="btnController" />
                    <img src="./assets/controller/play.png" alt="" />
                    <img src="./assets/controller/next.png" alt="" className="btnController" />
                    <img src="./assets/controller/repeat.png" alt="" className="btnController" />
                </div>


                
                <div className="progressBarMusic">
                    <span className="minutePlayed">1:32</span>
                    <div className="progressMusic"></div>
                    <span className="minuteTotal">3:51</span>
                </div>


            </div>

            <div className=""></div>



            <div className=""> <h1>Hello world</h1> </div>

        </section>
    )
}