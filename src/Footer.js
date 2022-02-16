import React from 'react';

const Footer = () => {
    const yr = new Date().getFullYear();
    return (
    <>
      <footer>
          <p> copyright © {yr} </p>
      </footer>
    </>
    );
}

export default Footer;