import React from 'react';

const Navbar = ({newAdd}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto mb-15">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">FAQ</a>
        <a className="link link-hover">Changelog</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Download</a>
        <a className="link link-hover">Contact</a>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="navbar-center hidden gap-4 lg:flex">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">FAQ</a>
    <a className="link link-hover">Changelog</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Download</a>
    <a className="link link-hover">Contact</a>
  </div>
  <button onClick={newAdd} className="navbar-end">
    <a className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]">+ New</a>
  </button>
</div>
  );
};

export default Navbar;