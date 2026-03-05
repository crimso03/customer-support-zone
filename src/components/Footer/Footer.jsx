import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-base-content p-10">
      <aside>
        <a className="btn btn-ghost text-xl text-blue-700 font-bold -ml-5">CS — Ticket System</a>
        <p className="text-white">
          CS Ticket System helps manage customer support requests efficiently by tracking ticket progress and resolutions in one place.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-white">Company</h6>
        <a className="link link-hover text-white">Our Mission</a>
        <a className="link link-hover text-white">About Us</a>
        <a className="link link-hover text-white">Contact Saled</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white">SUPPORT</h6>
        <a className="link link-hover text-white">Products & Services</a>
        <a className="link link-hover text-white">Customer Stories</a>
        <a className="link link-hover text-white">Download Apps</a>

      </nav>
      <nav>
        <h6 className="footer-title text-white">Information</h6>
        <a className="link link-hover text-white">Privacy Policy</a>
        <a className="link link-hover text-white">Terms & Conditions</a>
        <a className="link link-hover text-white">Join Us</a>

      </nav>
      <form>
        <h6 className="footer-title text-white">SUBSCRIBE TO OUR NEWSLETTER</h6>
        <fieldset className="w-80">
          <label className="text-white">The latest news, articles and resources sent to your inbox weekly.</label>
          <div className="join mt-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered join-item" />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>


    </footer>
  );
};

export default Footer;