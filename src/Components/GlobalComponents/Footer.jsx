import "./Footer.scss";
import logo from "../../images/logo-symbol.png";
import Brand from "../../images/Brand.png";
import facebook from "../../images/FooterImages/facebook.png";
import instagram from "../../images/FooterImages/instagram.png";
import linkedin from "../../images/FooterImages/linkedin.png";
import twitter from "../../images/FooterImages/twitter.png";
import youtube from "../../images/FooterImages/youtube.png";
import appStore from "../../images/FooterImages/AppStore.png";
import googlePlay from "../../images/FooterImages/GooglePlay.png";
import usFlag from "../../images/FooterImages/USflag.png"
import arrow from "../../images/Arrow.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooter">
        <div className="footerBrand">
          <div className="footerBrandIcons">
            <img src={logo} alt="logo" />
            <img src={Brand} alt="logo" className="footerBrandlogo" />
          </div>
          <div className="footerText">
            Best information about the company  gies here but now lorem
            ipsum is
          </div>
          <div className="footerIcons">
            <img src={facebook} alt="facebookicon" />
            <img src={twitter} alt="twittericon" />
            <img src={linkedin} alt="linkedinicon" />
            <img src={instagram} alt="instagramicon" />
            <img src={youtube} alt="youtubeicon" />
          </div>
        </div>
        <div className="footerAbout">
          <h6>About</h6>
          <span>About Us</span>
          <span>Find store</span>
          <span>Categories</span>
          <span>Blogs</span>
        </div>
        <div className="footerPartnership">
          <h6>Partnership</h6>
          <span>Partners</span>
          <span>Companies</span>
          <span>Shops</span>
          <span>Blogs</span>
        </div>
        <div className="footerInformation">
          <h6>Information</h6>
          <span>Help</span>
          <span>Refund</span>
          <span>Shipping</span>
          <span>Contact</span>
        </div>
        <div className="footerForUsers">
          <h6>For users</h6>
          <span>Login</span>
          <span>Register</span>
          <span>Settings</span>
          <span>My Orders</span>
        </div>
        <div className="footerGetApp">
          <h6>Get app</h6>
          <img src={appStore} alt="appstore" />
          <img src={googlePlay} alt="googleplay" />
        </div>
      </div>
      <div className="bottomFooter">
        <span className="Ecommerce">2023 Ecommerce.</span>
        <span className="footerLanguage"><img src={usFlag} alt="usFlag" /> English <img src={arrow} alt="arrow"/></span>
      </div>
    </div>
  );
};

export default Footer;
