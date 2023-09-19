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
          src={require("../../svg/instagram.svg").default}
          width="25"
        ></img>

        <img
          className="facebook"
          alt="img"
          src={require("../../svg/facebook.svg").default}
          width="25"
        ></img>
      </div>
    </div>
  );
};

export default Footer;
