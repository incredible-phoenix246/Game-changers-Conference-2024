import * as React from "react";

interface FooterLinkProps {
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => {
  return <div>{children}</div>;
};

const footerLinks = ["Privacy Policy", "Terms & Conditions"];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center px-16 py-6 text-sm tracking-normal bg-black max-md:px-5">
      <div className="flex gap-5 w-full max-w-[1170px] max-md:flex-wrap max-md:max-w-full items-center justify-center">
        <nav className="flex gap-5 items-center justify-between text-white">
          {footerLinks.map((link, index) => (
            <FooterLink key={index}>{link}</FooterLink>
          ))}
        </nav>
        <div className="flex-auto my-auto text-center text-white">
          &copy; {currentYear} ForwardLive. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
