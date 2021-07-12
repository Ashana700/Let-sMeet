import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faMicrophone,
    faPhone,
    faVideoSlash,
    faAngleUp,
    faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";
import { useState, useEffect, useContext } from "react";
import {formatDate} from './../MediaDevices/MediaDevices';
import { SocketContext } from "../../SocketContext";

const Footer = () => {
     
    const { stream } = useContext(SocketContext);

    let interval = null;
    const [currentTime, setCurrentTime] = useState(() => {
    return formatDate();
    });                                                                                                  /* displays the current time */
    useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
    }, []);

    const [isAudio, setIsAudio] = useState(true);
    const [isVideo, setIsVideo] = useState(true);

    const toggleAudio = (value) => {
        stream.getAudioTracks()[0].enabled = value;                                      /* mute or unmute upon clicking the microphone button */
        setIsAudio(value);
    }  

    const toggleVideo = (value) => {
        stream.getVideoTracks()[0].enabled = value;                                     /* switch on or off camera upon clicking the video button */
        setIsVideo(value);
    }


    return (
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    Meeting details
                    <FontAwesomeIcon className="icon" icon={faAngleUp} />
                </div>
            </div>
            <div className="center-item">
                <div className={`icon-block $(!isAudio ? "res-bg" : null)`} 
                      onClick={() => toggleAudio(!isAudio)} >                                      {/* microphone icon for audio control */}
                <FontAwesomeIcon className="icon" 
                icon={isAudio ? faMicrophone : faMicrophoneSlash} />
                </div>
                <div className="icon-block" >
                    <a href="/disconnected">                                                         
                    <FontAwesomeIcon className="icon red" icon={faPhone}>                     {/* leave the page entirely upon clicking the icon  */}
                        </FontAwesomeIcon>
                    </a>
                </div>
                <div className={`icon-block $(!isVideo ? "res-bg" : null)`} 
                       onClick={() => toggleVideo(!isVideo)} >                                       {/* toggle video upon clicking the icon */}
                <FontAwesomeIcon className="icon" icon={isVideo ? faVideo : faVideoSlash} />
                </div>
            </div>
            <div className="right-item">
                <div className="icon-block">
                    <p className="title">{currentTime}</p>                                                   {/* diplays current time */}
                </div>
            </div>
        </div>
    );
};

export default Footer;