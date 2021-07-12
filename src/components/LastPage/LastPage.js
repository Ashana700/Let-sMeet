import './LastPage.scss';
import {Link} from 'react-router-dom';

const LastPage = () => {
    return (
        <div className="no-match">
            <div className="no-match__content">
                <h2>Hope you had a great time!</h2>
                <div className="action-btn">
                    <Link className="btn green" to="/connected">
                        Return                                                {/* directs back to the Call Page */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LastPage;