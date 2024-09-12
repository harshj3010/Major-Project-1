import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react'; // Make sure to import the necessary components

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid rounded style={{ backgroundColor: 'black' }} className="fixed w-full z-50 top-0">
      <div className="w-full max-w-screen-xl mx-auto flex items-center px-4 py-2">
        {/* Branding on the left */}
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">SanskritiGen AI</span>
        </Navbar.Brand>

        {/* Centered content */}
        <div className="flex-grow flex items-center justify-center">
          <Navbar.Collapse>
            <Navbar.Link className="text-white mx-4" to="#">
              Home
            </Navbar.Link>
            <Navbar.Link className="text-white mx-4" to="#">
              About
            </Navbar.Link>
            <Navbar.Link className="text-white mx-4" to="#">
              Services
            </Navbar.Link>
            <Navbar.Link className="text-white mx-4" to="#">
              Pricing
            </Navbar.Link>
            <Navbar.Link className="text-white mx-4" to="#">
              Contact
            </Navbar.Link>
          </Navbar.Collapse>
        </div>

        {/* CTA Button */}
        <div className="flex md:order-2">
          <Link to='/login'>
            {/* <Button>Sign-In</Button> */}
          </Link>
          <Navbar.Toggle />
        </div>
      </div>
    </Navbar>
  );
}
