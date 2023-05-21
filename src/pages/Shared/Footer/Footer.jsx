import logo from "../../../assets/img/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-base-200 ">
      <footer className="footer max-w-7xl mx-auto p-10 text-base-content">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
          <p className="font-bold">
            Toys-house
            <br />@ 2023 rhabir authors. All rights reserved.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <p className="">Email: rhabir.co@gmila.com</p>
          <p className="">Phone: 01611064603</p>
          <p className="">Address: Dhaka, Bangladesh</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
