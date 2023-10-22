import SMwallpaper from "../../images/image102.png";
import "./SendMail.scss";

const SendMail = () => {
  return (
    <div className="SMmain">
      <div
        className="SMcontainer"
        style={{ backgroundImage: `url(${SMwallpaper})` }}
      >
        <div className="SMhp">
          <h2>
            An easy way to send <br /> requests to all suppliers
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Delectus magni ullam dignissimos recusandae maxime
          </p>
        </div>
        <div className="SMsendmail">
          <p>Send quote to suppiers</p>
          <div>
            <input
              className="SMwiyn"
              id="SMinputq"
              type="text"
              placeholder="What item you need?"
            />
          </div>
          <div>
            <input
              className="SMtmd"
              id="SMinputw"
              type="text"
              placeholder="Type more details"
            />
          </div>
          <div className="SMti">
            <input
              className="SMti1"
              id="SMinpute"
              type="text"
              placeholder="Quantity"
            />
            <input
              className="SMti2"
              id="SMinputr"
              type="text"
              placeholder="Pcs"
            />
          </div>
          <button type="button" className="inquiryButton">
            Send inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
