import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import './HomePage.scss';

//first page of the website

const HomePage = () => {

    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h1>Welcome!</h1>
                        <p>
                            Feel the virtual world real with teams
                        </p>
                        <div className="action-btn">
                            <button className="btn white" >
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                <a href="/connected">New Meeting</a>                          {/* enter the call page upon clicking this icon */}
                            </button>
                        </div>
                    </div>
                    <div className="help-text">                        
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://www.dougallfraser.com/wp-content/uploads/2021/04/laurenlaptop.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;