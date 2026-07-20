
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const Routes = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
const myLinks = [
  { name: "Blog", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Newsletter", path: "/news" },
];
  const footerLinks = [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:example@email.com" },
    { label: "RSS feed", href: "/rss" },
    { label: "Add to Feedly", href: "#" },
  ];
  return (
    <div className={mode === 'dark' ? 'dark' : ''}>
      <div className=" min-h-screen bg-white text-black dark:bg-gray-900  dark:text-white  transition-colors duration-300">
        <NavBar  title="Your Name" links={myLinks} close="/assets/menu-outline.png" menu="/assets/menu.png" />
        <Outlet />
              <Footer copyrightYear="2023" links={footerLinks} />
      </div>
    </div>
  );
};
export default Routes;