function Footer() {
  return (
    <div className="Footer">
      <div className="row">
        <hr className="separate" />
      </div>
      <div className="Links row">
        <div className="col-1"></div>
        <div className="somelinks col-1">
          <a className="footerlinks" href="/">
            TechU
          </a>
        </div>
        <div className="somelinks col-2">
          <a href="/ContactUs">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
