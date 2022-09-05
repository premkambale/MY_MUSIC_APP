import React from "react";
import "./Details.css";



const Details =(props)=>{
    console.log(props)
    return(
        <>
        <div className="detailsMain">
            <div className="image">
                <img src={require(`./../${props.img_src}`)} alt=""  width={300}/>
              
            </div>
            <h3 className="details__title">{props.song}</h3>
            <h3 className="artist">...{props.artist}...</h3>
         </div>

        </> 
    );
}
export default Details;