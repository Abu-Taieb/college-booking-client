const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <h3 className="font-bold text-3xl uppercase">TGA College</h3>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Admission</a>
          <a className="link link-hover">Sports</a>
          <a className="link link-hover">Entertainment</a>
        </div>
        <div>
          <span className="footer-title">Colleges</span>
          <a className="link link-hover">EASTWOOD COLLEGE</a>
          <a className="link link-hover">CENTRALVILLE COLLEGE</a>
          <a className="link link-hover">RIVERSIDE COLLEGE</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by TGA College</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
