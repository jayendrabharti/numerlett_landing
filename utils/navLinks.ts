import {
  FaHome,
  FaCube,
  FaBlog,
  FaCogs,
  // FaEnvelope
} from "react-icons/fa";

export interface NavBarLinkType {
  name: string;
  href: string;
  icon: React.ElementType;
}

export const NavBarLinks: NavBarLinkType[] = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Products", href: "/products", icon: FaCube },
  { name: "Services", href: "/services", icon: FaCogs },
  { name: "Blogs", href: "/blogs", icon: FaBlog },
  // { name: "Contact", href: "/contact", icon: FaEnvelope },
];
