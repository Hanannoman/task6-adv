
interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  copyrightYear: string;
  links: FooterLink[];
}

const Footer = ({ copyrightYear, links }: FooterProps) => {
  return (
    <footer className="py-8 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-4 md:gap-6 text-sm dark:text-white">
        
       
        <span className="order-2 md:order-1 ">
          © {copyrightYear}
        </span>
        
       
        <div className="order-1 md:order-2 flex flex-col md:flex-row items-center gap-[14px] md:gap-6">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="hover:text-gray-500 transition-colors text-black dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;