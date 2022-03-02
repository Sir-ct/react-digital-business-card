import React from "react";
import dp from "../src/images/IMG-20210820-WA0057.jpg"

function Details(){
    return(

        <div className="detail-cover">

                <div className="detail-img-div">
                    <img src={dp} alt="" className="detail-img" />
                </div>
           
            <div className="detail-info">
                <h2 className="name"> Ogbusuo Onyeka</h2>
                <div className="title">Fullstack developer</div>
                <div className="details-info-btns">
                    <a href="https://davidsirct@gmail.com" className="mail-link"><ion-icon name="mail-outline"></ion-icon> Email </a>
                    <a href="https://www.linkedin.com/in/onyeka-ogbusuo-b6324a202/" className="linkedin-link"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a>
                </div>
            </div>
        </div>

    
    )
}

export default Details