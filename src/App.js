import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import LastPage from './components/LastPage/LastPage';
import Info from './components/Info/Info';


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginTop: 0,
    },
}));

const App = () => {

    const classes = useStyles();

    return (
        <Router>
            <Switch>

                <Route exact path="/">                                   {/*  Page 1  */}
                    <HomePage />                         {/*home page is called upon opening the website*/}
                </Route>


                <Route exact path="/connected">                           {/*  Page 2  */}
                    <div>
                        <Header />
                        <Info />
                        <div className={classes.wrapper}>              {/*   Call Page    */}
                            <VideoPlayer />
                            <Options>
                                <Notifications />
                            </Options>
                        </div>
                        <Footer />
                    </div>
                </Route>


                <Route path="/disconnected">                                {/*  Page 3  */}
                    <div>
                        <Header />
                        <div>                                            {/*   Last Page    */}
                            <LastPage />
                        </div>
                    </div>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;