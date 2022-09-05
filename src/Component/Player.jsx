import React from "react";
import Details from "./Details";
import Control from "./Control";
import { useEffect, useState, useRef } from "react";
import "./Player.css";

const Player = (props) => {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false)


    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else {
            audioEl.current.pause();
        }
    })

    const skipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        }
        else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            })
        }
    }

    return (
        <>

            <div className="player df">
                <div className="heading df">
                    <h2>
                        SKY MUSIC
                    </h2>
                </div>
                <div className="details df">
                    <Details
                        img_src={props.songs[props.currentSongIndex].img_src}
                        song={props.songs[props.currentSongIndex].title}
                        currentSongIndex={props.currentSongIndex}
                        artist={props.songs[props.currentSongIndex].artist}
                    />
                    <Control
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        skipSong={skipSong}
                    />
                </div>
                <div className="audio">
                    <audio
                        className="player_audio"
                        ref={audioEl}
                        // autoPlay
                        src={require(`./../${props.songs[props.currentSongIndex].song_src}`)}
                        controls
                    ></audio>
                </div>
                <div className="next">
                    <p>
                        Next Up :<span>{props.songs[props.nextSongIndex].title} by {" "}
                            {props.songs[props.nextSongIndex].artist}
                        </span>
                    </p>
                </div>

            </div>
        </>
    );
}
export default Player;