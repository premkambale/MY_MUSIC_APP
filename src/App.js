import React, { useEffect } from "react";
import { useState } from "react";
import Player from "./Component/Player";
import "./../src/App.css"; 











const App = () => {

   

    const [songs] = useState([
        {
            title: "Magic In The Sky",
            artist: "Alan_Walker",
            img_src:"Images/m1.jpg",
            song_src: "Songs/magic.mp3"
        },

        {
            title: "Machayenge",
            artist: "Emmeway",
            img_src: "Images/m3.jpg",
            song_src: "Songs/machayenge.mp3"
        },
        {
            title: "Duaa",
            artist: "Versha_Tripathi",
            img_src:"Images/m1.jpg",
            song_src: "Songs/Duaa.mp3"
        },
        {
            title: "Kaam 25",
            artist: "Devine",
            img_src:"Images/m2.jpg",
            song_src: "Songs/kaam_25.mp3"
        },

      

        {
            title: "Mirchi",
            artist: "Devine",
            img_src:"Images/m4.jpg",
            song_src: "Songs/mirchi.mp3"
        },
        
        {
            title: "Khairiyat",
            artist: "Arijit_Singh",
            img_src:"Images/m6.jpg",
            song_src: "Songs/khairiyat.mp3"
        },
        {
            title: "Desi Kalakaar",
            artist: "Honey_Singh",
            img_src:"Images/m3.jpg",
            song_src: "Songs/desi_kalakar.mp3"
        },
        
        {
            title: "Deewane",
            artist: "Aditya_Yadav",
            img_src:"Images/m6.jpg",
            song_src: "Songs/deewane.mp3"
        },
        
     
    ])


    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0
            }
            else {
                return currentSongIndex + 1
            }
        })
    }, [currentSongIndex , songs.length])

    return (

        <>
        <div className="main">           <Player
            currentSongIndex ={currentSongIndex}
            setCurrentSongIndex ={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
             />
             </div>
 

        </>

    )

}

export default App;