
import NavLogo from "../Images/Exchmarket-Logo.png";
import {Link} from 'react-router-dom'

const navigation = [
  {
    name: "Home",
    href: "/",
    current: false,
    dropdown: false,
    dropdownList: {},
  },
  { name: "Blogs",
    href: "/Blogs",
    current: false,
    dropdown: false
  },
  {
    name: "Customer Feedback",
    href: "/Feedback",
    current: false,
    dropdown: false,
  },
  {
    name: "Contact Us",
    href: "/ContactUs",
    current: false,
    dropdown: false,
  },
];


export default function Navbar() {
  return (
      <div className="navbar bg-red-800 sticky top-0 z-10">
        <div className="navbar-start">
          <details className="dropdown sm:hidden block">
            <summary className="m-1 btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
              </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              {
                navigation.map((data,index)=><li><Link to={data.href}>{data.name}</Link></li>)
              }
            </ul>
          </details>
          <a className=" text-xl"><img src={NavLogo} alt={"gamesWalla"} width={60}/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-lg text-white">
            {
              navigation.map((data, index) => {
                return (
                    data.dropdown ? (
                            <li>
                              <details className={'dropdown'}>
                                <summary>{data.name}</summary>
                                <ul className="p-2 ">
                                  {
                                    data.dropdownList.map((item, index) =>
                                        <li className={"text-gray-700 w-56"}><Link to={item.url}>{item.name}</Link></li>
                                )
                              }
                            </ul>
                          </details>
                        </li>
              ) :
                <li><Link to={data.href}>{data.name}</Link></li>
                )
              })
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a href='https://wa.link/8l2fxm' className=" btn rounded-full md:p-2 px-3 mr-3 bg-red-100">Get Account</a>
        </div>
      </div>
  );
}
