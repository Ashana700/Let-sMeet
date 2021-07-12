import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';


const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivedCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>{call.name} is calling: </h1>                                      {/* notification appears as soon as a call is recieved */}
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Accept                                                    {/* upon accepting the call the two persons can start chatting through video call */}
                    </Button>
                </div>
            )}
        </>
    )
}

export default Notifications;