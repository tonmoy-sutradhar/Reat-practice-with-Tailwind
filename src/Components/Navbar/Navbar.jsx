import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/faq", name: "FAQ" },
  ];
  return (
    <nav className="bg-yellow-500">
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <ImCross></ImCross> : <IoMdMenu></IoMdMenu>}
      </div>
      <ul
        className={` absolute md:flex md:static m-4 md:m-0 duration-1000 text-2xl rounded-md font-bold bg-yellow-500 p-4 ${
          // open ? "" : " hidden"
          open ? "top-4" : " -top-72"
        } `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
