
import NavLogo from "../Images/Exchmarket-Logo.png";
import {Link} from 'react-router-dom'
import {BellIcon} from '@heroicons/react/24/outline'
const navigation = [
  {
    name: "Home",
    href: "/",
    current: false,
    dropdown: false,
    dropdownList: {},
  },
  {
    name: "Online Betting Sites",
    href: "",
    current: false,
    dropdown: true,
    dropdownList: [
      {
        name: "GamesWalla .net",
        url: "",
      },
      {
        name: "SS Exchange",
        url: "",
      },
      {
        name: "Sky Exchange",
        url: "",
      },
      {
        name: "Hony777",
        url: "",
      },
      {
        name: "Lotusbook247",
        url: "",
      },
      {
        name: "Satfair",
        url: "",
      },
      {
        name: "Satsport 247",
        url: "",
      },
      {
        name: "Betxhub 247",
        url: "",
      },
      {
        name: "Diamond Exch",
        url: "",
      },
    ],
  },
  {
    name: "Games Sites",
    href: "",
    current: false,
    dropdown: true,
    dropdownList: [
      {
        name: "GamesWalla .net ",
        url: "",
      },
      {
        name: "Cricket Betting Sites",
        url: "",
      },
      {
        name: "Football Betting Site",
        url: "",
      },
      {
        name: " Pro kabaddi Betting ",
        url: "",
      },
      {
        name: "Tehnis Betting Sites",
        url: "",
      },
      {
        name: "Hockey Betting Sites",
        url: "",
      },
      {
        name: "Golf Betting Sites",
        url: "",
      },
      {
        name: "Online Casino Sites",
        url: "",
      },
    ],
  },
  {
    name: "Cricket Betting Sites",
    href: "",
    current: false,
    dropdown: true,
    dropdownList: [
      {
        name: "Cricket Betting Tips ",
        url: "",
      },
    ],
  },
  { name: "Blogs", href: "/Blogs", current: false, dropdown: false },
  {
    name: "Customer Feedback",
    href: "/Feedback",
    current: false,
    dropdown: false,
  },
  { name: "Contact Us", href: "/ContactUs", current: false, dropdown: false },
];


export default function Navbar() {
  return (
      <div className="navbar bg-red-800 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {
                navigation.map((data,index)=>{
                  return (
                      data.dropdown ? (
                              <li>
                                <details>
                                  <summary>{data.name}</summary>
                                  <ul className="p-2 ">
                                    {
                                      data.dropdownList.map((item, index) =>
                                          <li><Link to={item.href}>{item.name}</Link></li>
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
          <a className=" text-xl"><img src={NavLogo} alt={"gamesWalla"} width={60}/></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:text-lg text-white">
            {
              navigation.map((data,index)=>{
                return (
                    data.dropdown ? (
                        <li>
                          <details>
                            <summary>{data.name}</summary>
                            <ul className="p-2 ">
                              {
                                data.dropdownList.map((item, index) =>
                                    <li className={"text-gray-700 w-56"}><Link to={item.href}>{item.name}</Link></li>
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
          <a className="bg-base-100 rounded-full p-2 mr-3"><BellIcon className={"h-6"}/></a>
        </div>
      </div>
  );
}
