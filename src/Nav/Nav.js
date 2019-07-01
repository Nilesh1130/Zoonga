import React from 'react';
import logoImg from "../assets/images/kyazoonga.png";
/* eslint react/prop-types: 0 */
const Nav = () => {
  return (
    <nav className="navbar navbar-inverse site-nav">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="site-logo" href="javascript:void(0)">
          <img src={logoImg} alt="The Big Ticket" title="The Big Ticket"/>
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-right " id="myNavbar">
        <ul className="nav navbar-nav top-nav hide-on-mobile">
          <li>
            <a href="javascript:void(0)">Sign Up</a>
          </li>
          <li>
            <a href="javascript:void(0)">Sign In</a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              <span className="badge">4</span>
            </a>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i className="fa fa-bell" aria-hidden="true"></i>
              <span className="badge">10</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a href="javascript:void(0)">Action</a>
              </li>
              <li>
                <a href="javascript:void(0)">Another action</a>
              </li>
              <li>
                <a href="javascript:void(0)">Something else here</a>
              </li>
              <li>
                <a href="javascript:void(0)">Separated link</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span className="label label-primary">Ticket Your Event</span>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav top-nav hide-on-desktop">
          <li>
            <a href="javascript:void(0)">Sign Up</a>
          </li>
          <li>
            <a href="javascript:void(0)">Sign In</a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              <span className="badge">4</span>
            </a>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <i className="fa fa-bell" aria-hidden="true"></i>
              <span className="badge">10</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li>
                <a href="javascript:void(0)">Action</a>
              </li>
              <li>
                <a href="javascript:void(0)">Another action</a>
              </li>
              <li>
                <a href="javascript:void(0)">Something else here</a>
              </li>
              <li>
                <a href="javascript:void(0)">Separated link</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span className="label label-primary">Ticket Your Event</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">Concerts</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="blue-bg">Cricket</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="orange-bg">Events</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="green-bg">Sports</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="pink-lt-bg">Amusement Parks</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="purple-bg">Restaurants</a>
          </li>
          <li>
            <a href="javascript:void(0)" className="yellow-bg">Theatre & Arts</a>
          </li>
          <li>
            <a href="javascript:void(0)">Parties</a>
          </li>
        </ul>
    </div>
    </nav>
  );
};

export default Nav;