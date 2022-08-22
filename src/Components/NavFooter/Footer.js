//React Router
import { Link } from "react-router-dom";

//React Share
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

//Assets
import mainLogo from "../../assets/logos/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__titleContainer">
            <Link to="/" className="footer__logoContainer">
              <img
                className="footer__logo"
                src={mainLogo}
                alt="SDG data catalog"
                loading="lazy"
                width={60}
                height={60}
              />
            </Link>
            <div className={`footer__title`}>
              <p className="footer__title--bold">SDG</p>
              <p>Data Catalog</p>
            </div>
          </div>
          <div className="footer__disclaimer">
            <p>
              The SDG Catalog is an initiative created by the{" "}
              <a href="https://ai4good.org" target="_blank" rel="noreferrer">
                AI for Good Foundation
              </a>
              , an IRS 501(c)3 Public Charity (81-1631000).
            </p>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__shareContainer">
            <p>Share with your network</p>
          </div>
          <div className="footer__socialIconsContainer">
            <FacebookShareButton
              className="footer__icon"
              url={`ai4good.org`}
              title="SDG Data Catalog - Support researchers and innovators to advance the 2030 agenda with relevant and real-time datasets. "
            >
              <FacebookIcon borderRadius={50} size={40} />
            </FacebookShareButton>
            <TwitterShareButton
              className="footer__icon"
              url={`ai4good.org`}
              title="SDG Data Catalog - Support researchers and innovators to advance the 2030 agenda with relevant and real-time datasets. "
            >
              <TwitterIcon borderRadius={50} size={40} />
            </TwitterShareButton>
            <LinkedinShareButton
              className="footer__icon"
              url={`ai4good.org`}
              title="SDG Data Catalog - Support researchers and innovators to advance the 2030 agenda with relevant and real-time datasets. "
            >
              <LinkedinIcon borderRadius={50} size={40} />
            </LinkedinShareButton>
            <TelegramShareButton
              className="footer__icon"
              url={`ai4good.org`}
              title="SDG Data Catalog - Support researchers and innovators to advance the 2030 agenda with relevant and real-time datasets. "
            >
              <TelegramIcon borderRadius={50} size={40} />
            </TelegramShareButton>

            <WhatsappShareButton
              className="footer__icon"
              url={`ai4good.org`}
              title="SDG Data Catalog - Support researchers and innovators to advance the 2030 agenda with relevant and real-time datasets. "
            >
              <WhatsappIcon borderRadius={50} size={40} />
            </WhatsappShareButton>
            <EmailShareButton
              className="footer__icon"
              url={`ai4good.org`}
              title="SDG Data Catalog - Support researchers and innovators to advance the 2030 agenda with relevant and real-time datasets. "
            >
              <EmailIcon borderRadius={50} size={40} />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
