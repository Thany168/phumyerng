import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center text-gray-600">
      &copy; {new Date().getFullYear()} Phumyerng. All rights reserved.
    </footer>
  );
};

export default Footer;
