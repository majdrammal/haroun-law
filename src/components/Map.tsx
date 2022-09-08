import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Map = () => {
    return (
        <div className="under__map">
          <div className="under__map--item">
            <FontAwesomeIcon icon={["fas", "location-dot"]} className="under__map--img"/>
            <div className="under__map--item--text">
              <h3 className="under__map--item--title">Address:</h3>
              <p className="under__map--item--para">Beirut, Latakia, Syria</p>
            </div>
          </div>
          <div className="under__map--item">
            <FontAwesomeIcon icon={["fas", "phone-volume"]} className="under__map--img"/>
            <div className="under__map--item--text">
              <h3 className="under__map--item--title">Call Us:</h3>
              <p className="under__map--item--para">+961 76 984 948</p>
            </div>
          </div>
          <div className="under__map--item">
            <FontAwesomeIcon icon={["fas", "envelope"]} className="under__map--img"/>
            <div className="under__map--item--text">
              <h3 className="under__map--item--title">Email Us:</h3>
              <p className="under__map--item--para">harounlawfirm@gmail.com</p>
            </div>
          </div>
        </div>
    );
}

export default Map;
