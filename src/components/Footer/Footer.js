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
    });

    useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
    }, []);

    const [isAudio, setIsAudio] = useState(true);
    const [isVideo, setIsVideo] = useState(true);

    const toggleAudio = (value) => {
        stream.getAudioTracks()[0].enabled = value;
        setIsAudio(value);
    }  

    const toggleVideo = (value) => {
        stream.getVideoTracks()[0].enabled = value;
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
                      onClick={() => toggleAudio(!isAudio)} >                                         {/* toggle audio upon clicking the icon */}
                <FontAwesomeIcon className="icon" 
                icon={isAudio ? faMicrophone : faMicrophoneSlash} />
                </div>
                <div className="icon-block" >
                    <a href="/disconnected">
                    <FontAwesomeIcon className="icon red" icon={faPhone}>
                       <span class="onhover">Leave</span>
                        </FontAwesomeIcon>
                    </a>
                </div>
                <div className={`icon-block $(!isVideo ? "res-bg" : null)`} 
                       onClick={() => toggleVideo(!isVideo)} >                                        {/* toggle video upon clicking the icon */}
                <FontAwesomeIcon className="icon" icon={isVideo ? faVideo : faVideoSlash} />
                </div>
            </div>
            <div className="right-item">
                <div className="icon-block">
                    <p className="title">{currentTime}</p>                                                     {/* diplays current time */}
                </div>
            </div>
        </div>
    );
};

export default Footer;