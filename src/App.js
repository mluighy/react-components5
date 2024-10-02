import React from 'react';

// Use fragment <></> to conditionally display login / dashboard + signout
export default function Navbar() {
  const isAuthUser = false;

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Logo />
        <div className="navbar-links">
          {isAuthUser ? (
            <a href="#" className="navbar-link">
              Log in
            </a>
          ) : (
            <>
              <a href="#" className="navbar-link">
                DasBoard
              </a>
              <a href="#" className="navbar-link">
                Sign out
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo-wrapper">
      <a href="#" className="logo-link">
        <img
          className="logo-img"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          alt=""
        />
      </a>
    </div>
  );
}
