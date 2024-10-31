import { useState } from "react";
import Link from "./../Link/Link";
import { TbMenu2 } from "react-icons/tb";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navigation = () => {

  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  console.log(routes);

  return (
    <nav className="w-11/12 mx-auto p-10 text-black">
      <div className="md:hidden bg-yellow-600" onClick={()=> setOpen(!open)}> 
        {
            open === true ? <TbMenu2 className="text-5xl" /> : 
            <IoIosCloseCircleOutline className="text-5xl" />
        }
      </div>

      <ul className={`md:flex absolute px-6 py-7 mt-6 shadow-lg bg-yellow-400
        md:static duration-1000 ${open ? 'top-16' : '-top-60'}
        `}>

        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
