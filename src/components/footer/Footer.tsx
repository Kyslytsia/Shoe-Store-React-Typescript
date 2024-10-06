import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="phone">Phone: 800-456-7890</div>
      <div className="email">Email: info@yoursite.com</div>

      <div>
        <img
          className="instagram"
          alt="img"
          width="25"
          src={require("../../svg/instagram.svg").default}
        ></img>

        <img
          className="facebook"
          alt="img"
          width="25"
          src={require("../../svg/facebook.svg").default}
        ></img>
      </div>
    </div>
  );
};

export default Footer;
