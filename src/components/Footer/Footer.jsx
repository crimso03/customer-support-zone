import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal text-base-content p-10">
  <aside>
    <a className="btn btn-ghost text-xl text-blue-700 font-bold">CS — Ticket System</a>
    <p className="text-white">
      CS Ticket System helps manage customer support requests efficiently by tracking ticket progress and resolutions in one place.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-white">QUICK LINKS</h6>
    <a className="link link-hover text-white">Home</a>
    <a className="link link-hover text-white">Products</a>
    <a className="link link-hover text-white">About</a>
    <a className="link link-hover text-white">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">SUPPORT</h6>
    <a className="link link-hover text-white">FAQ</a>
    <a className="link link-hover text-white">Shipping</a>
    <a className="link link-hover text-white">Returns</a>
    <a className="link link-hover text-white">Privacy Policy</a>
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