import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Info.scss";


const Info = () => {

  const close = () => {
    document.getElementById('info').style.visibility = "hidden";
    console.log("hiddencommand");
  }

  return (

    <div id="info" className="meeting-info-block">
      <div className="meeting-header">
        <h3>Your meeting's ready!</h3>

        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={close}                                                       /* info box closes upon clicking the cross button */
        />
      </div>
      <p className="info-text">
        Go ahead and enter your name then either copy your id(from that left blue button) and ask your friend to call on that id
        or the other way round.
        Enjoy!
      </p>
      <p className="small-text">Click the red phone icon to leave.</p>
    </div>

  );
};

export default Info;