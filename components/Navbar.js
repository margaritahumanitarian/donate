import Link from 'next/link';
// eslint-disable-next-line sort-imports
import { FaRegHeart, FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import Image from 'next/image';
import React from 'react';
import { Routes } from '../models/routes';
import SideNavbar from './SideNavbar';
import { useContextTheme } from 'components/ThemeContext';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [showSideNav, setShowSideNav] = React.useState(false);

  const router = useRouter();

  const { toggleTheme, cardsBackgroundColor, theme } = useContextTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <>
      <SideNavbar setShow={setShowSideNav} show={showSideNav} />
      <div
        className={`navbar ${
          theme === 'dark' ? cardsBackgroundColor : 'bg-gray-800'
        } text-neutral-content sticky top-0 z-50 shadow justify-center z-50 md:h-20 md:border-b-1 border-black`}
      >
        <div className="nav-contents-container">
          <button
            aria-label="sidenav-btn"
            className=" btn-ghost flex absolute left-3  lg:hidden"
            onClick={() => setShowSideNav(!showSideNav)}
            type="button"
          >
            {showSideNav ? (
              <ImCross className="inline-block w-5 h-5 stroke-current " />
            ) : (
              <GiHamburgerMenu className="inline-block w-5 h-5 stroke-current " />
            )}
          </button>
          <div className="flex flex-auto pl-8 lg:pl-0 mx-1 xs:text-lg justify-center md:justify-start">
            <div className="flex items-center hidden lg:flex">
              <Link className="" href={Routes.Home} passHref>
                <a className="flex items-center lg:flex" href="home">
                  <Image
                    alt="mhf logo"
                    height="40"
                    src="/images/MHF-Color-300x300.png"
                    width="40"
                  />
                </a>
              </Link>
            </div>
            <Link
              className="text-sm font-bold ml-6 xs:text-xs sm:text-sm px-3"
              href={Routes.Home}
              passHref
            >
              <a
                className="py-3 lg:text-2xl lg:px-5 hover:bg-gray-700 rounded "
                href="home"
              >
                {'Margarita Humanitarian Foundation'}
              </a>
            </Link>
          </div>
          <div className="flex-auto px-2 mx-2 hidden lg:flex">
            <div className="items-stretch hidden lg:flex">
              <Link href={Routes.Home} passHref>
                <a
                  className={`p-3 hover:bg-gray-700 rounded  ${
                    router.pathname == '/' && 'active'
                  }`}
                  href="home"
                >
                  {'Home'}
                </a>
              </Link>
              <Link href={Routes.InKind} passHref>
                <a
                  className={`p-3 hover:bg-gray-700 rounded  ${
                    router.pathname == Routes.InKind && 'active'
                  }`}
                  href="inkind"
                >
                  {'In-Kind'}
                </a>
              </Link>
              <Link href={Routes.Fund} passHref>
                <a
                  className={`p-3 hover:bg-gray-700 rounded  ${
                    router.pathname == Routes.Fund && 'active'
                  }`}
                  href="fund"
                >
                  {'Fund'}
                </a>
              </Link>
              <Link href={Routes.GiveYourTime} passHref>
                <a
                  className={`p-3 hover:bg-gray-700 rounded  ${
                    router.pathname == Routes.GiveYourTime && 'active'
                  }`}
                  href="giveyourtime"
                >
                  {'Give Your Time'}
                </a>
              </Link>
              <Link href={Routes.PartnerWithUs} passHref>
                <a
                  className={`p-3 hover:bg-gray-700 rounded  ${
                    router.pathname == Routes.PartnerWithUs && 'active'
                  }`}
                  href="partnerwithus"
                >
                  {'Partner With Us'}
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-none hidden sm:flex lg:hidden xl:flex">
            <Link href={Routes.Fund} passHref>
              <a className="p-3 hover:bg-gray-700 rounded" href="fund">
                {'Help Families in Need'}
              </a>
            </Link>
            <Link href={Routes.InKind} passHref>
              <a className="btn btn-square btn-ghost" href="inkind">
                <FaRegHeart className="inline-block w-5 h-5 stroke-current" />
              </a>
            </Link>
          </div>
          <button
            aria-label="theme-toggle-btn"
            className="btn btn-square btn-ghost"
            onClick={handleThemeChange}
            type="button"
          >
            {theme === 'dark' ? (
              <FiSun className="inline-block w-5 h-5 stroke-current" />
            ) : (
              <FaRegMoon className="inline-block w-5 h-4 stroke-current" />
            )}
          </button>
        </div>
      </div>
      <style jsx>{`
        .nav-contents-container {
          width: 100%;
          max-width: 1280px;
          display: flex;
          justify-content: space-between;
        }
        .active {
          border-color: rgba(50, 56, 64, 0.7);
          border-width: 2px;
          border-style: solid;
          box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.7);
        }
        .active:hover {
          background-color: rgb(54 62 75 / 1);
        }
      `}</style>
    </>
  );
}
