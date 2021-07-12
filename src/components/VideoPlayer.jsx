import React, { useContext, useEffect } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    marginTop: '60px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
  buttonn: {
    position: 'absolute',
    bottom: '0px',
  }
}));

const VideoPlayer = () => {
  const { socket, name, callAccepted, myVideo, userVideo, callEnded,
    stream, call, setStream, setCall, setMe } = useContext(SocketContext);
  const classes = useStyles();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })               /* asks for permission for audio and video */
      .then((currentStream) => {
        setStream(currentStream);

        myVideo.current.srcObject = currentStream;
      });

    socket.on('me', (id) => setMe(id));

    socket.on('calluser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal })
    });
  }, []);

  return (
    <Grid container className={classes.gridContainer}>                                       {/* our own video */}

      {
        stream && (
          <Paper className={classes.Paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom> {name || 'Name'} </Typography>
              <div>
                <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
              </div>
            </Grid>
          </Paper>
        )
      }
                                                                                           {/* other user's video */}
      {
        callAccepted && !callEnded && (
          <Paper className={classes.Paper}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom> {call.name || 'Name'} </Typography>
              <video playsInline ref={userVideo} autoPlay className={classes.video} />
            </Grid>
          </Paper>
        )
      }
    </Grid>
  );
}

export default VideoPlayer;