import React, { createContext, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
   
const SocketContext = createContext();

    const socket = io('https://ashana-app.herokuapp.com');

    const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null);
    const [me, setMe] = useState('');
    const [call, setCall] = useState({});
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState('');
    
    
    
    const myVideo = useRef();  
    const userVideo = useRef();
    const connectionRef = useRef();



     const answerCall = () => {
         setCallAccepted(true);                                          /*the user can accept the call and start video chatting with his peer*/

         const peer = new Peer({ initiator: false, trickle: false, stream});

         peer.on('signal', (data) => {
             socket.emit('answercall', { signal: data, to: call.from });
         });

         peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
         });

         peer.signal(call.signal);

         connectionRef.current = peer;

    }

    const callUser = (id) => {                                                /* a call is made upon entering the requird meeting id */
        const peer = new Peer({ initiator: true, trickle: false, stream});
        
        peer.on('signal', (data) => {
            socket.emit('calluser', { userToCall: id, signalData: data, from: me, name });
        });

        peer.on('stream', (currentStream) => {
           userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal) => {
            setCallAccepted(true);

            peer.signal(signal);
        });

        connectionRef.current = peer;
    }

    const leaveCall = () => {                                                 /* call ends and the page is reloaded */
        setCallEnded(true);

        connectionRef.current.destroy();

        window.location.reload();
    }

    return (
        <SocketContext.Provider value={{socket, call, callAccepted, myVideo, userVideo,
        stream, name, setName, callEnded, me, callUser, leaveCall, 
        answerCall, setStream, setMe,setCall,}}>
           {children}
        </SocketContext.Provider>
    );
} 

export { ContextProvider, SocketContext };
