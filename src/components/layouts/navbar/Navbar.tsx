import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa"
import Theme from "../global/Them";
import LocalSwitcher from "../global/local-switcher";
import Image from "next/image";
const NavBar = () => {
    /* 
    data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik0zNi43NzIgMy45MkMzNS41NjQgMS42OCAzMi43NDQgMCAyNy4xMDUgMEgxNS4yNjJsLTEuMzcgNC45NmMtMy41NDQuOC02LjY4NiAyLTkuMTAzIDMuMzYtMS4wNDcuNjQtMi4wOTUgMS4yOC0yLjk4IDIuMTYtLjg4Ny44OC0xLjY5MyAyLjE2LTEuNzczIDMuMzYtLjE2MSAxLjYuMjQxIDIuNzIuODA1IDMuNjguNDAzLjY0LjgwNiAxLjEyIDEuMjA5IDEuNiAxLjM3IDEuNTIgMy4wNjEgMi42NCA0LjkxNCAzLjYuNTY0LjMyIDEuMjA5LjY0IDEuODUzLjg4TDcuNjEgMjhoMTQuODIzYzguODYyIDAgMTIuOTctMy42OCAxMi45Ny04LjU2IDAtMi44OC0xLjc3Mi00LjcyLTQuMzMtNS42IDQuMDI4LS45NiA2LjM2NS0zLjYgNi4zNjUtNy4yIDAtLjMyIDAtLjU2LS4wOC0uOC0uOTY4IDAtMS44NTQgMC0yLjY2LjA4LTEuODUyLjA4LTMuODY2LjE2LTUuOC4zMi0uNDAzIDAtLjgwNi4wOC0xLjI4OS4xNiAxLjM3LjI0IDEuOTMzLjk2IDEuOTMzIDEuOTIgMCAxLjc2LTEuNTMgMi44LTQuMzUgMi44OGgtNS4zMTdsLjk2Ny0zLjc2Yy0yLjU3OC41Ni01LjA3NiAxLjI4LTcuNTczIDIuMzItLjMyMi4wOC0uNTY0LjI0LS44ODYuNEw5LjEzOSAyMS45MnMtLjA4LjI0LS4xNi41NmMtLjMyMy0uMjQtLjY0NS0uNTYtLjk2OC0uODgtMS4xMjctMS4wNC0yLjA5NC0yLjI0LTIuNzM5LTMuNjgtLjMyMi0uOC0uNTY0LTEuNDQtLjQ4My0yLjU2LjE2MS0xLjc2IDEuNDUtMy4wNCAyLjU3OC00IDEuMjg5LTEuMDQgMi43NC0xLjc2IDQuMTktMi40IDQuODMzLTIgOS43NDctMi44OCAxNS41NDgtMy40NCAxLjkzMy0uMTYgMy44NjctLjI0IDUuOC0uMzIgMy42MjUtLjE2IDcuODk1IDAgMTEuMzYuNDguMjQxIDAgLjcyNC4xNi43MjQgMCAuMDgxLS4xNi0uMzIyLS4yNC0uNDgzLS4zMi0yLjQxNy0uNzItNS4wNzUtMS4yLTcuNzM0LTEuNDR6TTE4LjQwNCAxNi41Nmg1LjQ3OGMyLjMzNiAwIDMuNTQ1LjcyIDMuNTQ1IDIuMTYgMCAxLjc2LTEuNjkyIDIuOTYtNC40MzEgMi45NmgtNi4wNDJsMS40NS01LjEyeiIKICAgIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==
    */
    const itemCount = 1

    const logo = "/images/logophoto2hd3.png"
    // pt-8 pb-10
    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="bg-black text-white">
                <header className="body-container flex justify-between items-center py-3 pb-5">
                    {/* logo and search */}
                    <div className="flex space-x-3 items-center">
                        <Image
                            // src="/images/lo1svg.svg"
                            src={logo}
                            alt="airbornefitness logo"
                            quality={100}
                            width={500}
                            height={500}
                            // className="h-[42px] w-fit"
                            className="h-[70px] w-[66px]"
                        />
                        <form>
                            <input
                                type="search"
                                className="input rounded-lg bg-gray-200 input-bordered input-sm w-56 lg:w-96 text-black"
                                placeholder="search ..."
                            />
                        </form>
                    </div>

                    {/* links */}
                    <ul className="hidden xl:flex space-x-5 font-satoshi">
                        <li>
                            <Link
                                href="#"
                                className="text-[24px]"
                            >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-[24px]"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-[24px]"
                            >
                                Content
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-[24px]"
                            >
                                community
                            </Link>
                        </li>
                    </ul>

                    {/* others */}
                    <div className="flex space-x-3 items-center">
                        {/* <div className="lg:flex lg:gap-x-2 lg:items-center lg:bg-red-500 lg:py-1.5 lg:px-3 lg:rounded-md">
                            <FaUser size={25} />
                            <button className="hidden lg:inline font-bold text-xl font-satoshi lg:-mb-2">
                                login
                            </button>
                        </div> */}
                        <button>
                            <FaUser size={25} />
                        </button>
                        <button className="relative bg-transparent border-none cursor-pointer">
                            <FaShoppingCart size={25} />
                            {itemCount > 0 && (
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </button>
                        <Theme />
                        <div className="hidden md:inline">
                            <LocalSwitcher />
                        </div>
                    </div>
                </header>
            </div>
            {/* <img
                decoding="async"
                width={5120}
                height={299}
                src="/images/cloudy_img.png"
                className="w-full h-[90px] object-cover md:object-fill relative bottom-[50px]"
                alt=""
            /> */}
            <Image
                // decoding="async"
                width={5120}
                height={299}
                src="/images/cloudy_img.png"
                className="w-full h-[90px] object-cover md:object-fill relative bottom-[50px]"
                alt=""
                quality={100}
            />
        </nav>


    )
};

export default NavBar;
