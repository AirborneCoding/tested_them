import React from "react";
import Link from "next/link";
import { FaShoppingBasket } from "react-icons/fa";
import { SiContentstack } from "react-icons/si";
import { GrArticle } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiListDashesBold } from "react-icons/pi";
import Image from "next/image";

const FooterBar = () => {
    return (
        <>
            <nav className="xl:hidden fixed bottom-0 w-full bg-black  pt-8 pb-5 !z-10 text-white">
                <div className="absolute">
                    {/* <img
                        src="https://heroessuperfood.com/wp-content/uploads/2022/07/Déchirure-HSF-1.png"
                        className="w-full h-[90px] object-cover md:object-fill relative bottom-[82px]"
                        alt=""
                    /> */}
                    <Image
                        src="/images/cloudy_img.png"
                        className="w-full h-[90px] object-cover md:object-fill relative bottom-[82px]"
                        alt=""
                        width={500}
                        height={500}
                        quality={100}
                    />
                </div>
                <ul className="body-container flex justify-between items-center gap-x-3 font-satoshi relative !z-10">
                    <li className="flex items-center">
                        <Link
                            href="#"
                            className="flex items-center space-x-2.5"
                        >
                            <div>
                                <FaShoppingBasket size={25} className="text-red-500" />
                            </div>
                            {/* bg-gradient-to-r from-red-500 to-gray-800 */}
                            <strong className="hidden sm:inline md:text-[24px] text-[18px] hover:!bg-gradient-to-r hover:!from-red-500 hover:!to-gray-800 hover:!inline-block hover:!text-transparent hover:!bg-clip-text">
                                <i>Shop</i>
                            </strong>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="flex items-center space-x-2.5"
                        >
                            <div>
                                <SiContentstack size={25} className="text-red-500" />
                            </div>
                            <strong className="hidden sm:inline md:text-[24px] text-[18px] hover:!bg-gradient-to-r hover:!from-red-500 hover:!to-gray-800 hover:!inline-block hover:!text-transparent hover:!bg-clip-text">
                                <i>Services</i>
                            </strong>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/en/content/articles`}
                            className="flex items-center space-x-2.5"
                        >
                            <div>
                                <GrArticle size={25} className="text-red-500" />
                            </div>
                            <strong className="hidden sm:inline md:text-[24px] text-[18px] hover:!bg-gradient-to-r hover:!from-red-500 hover:!to-gray-800 hover:!inline-block hover:!text-transparent hover:!bg-clip-text">
                                <i>Content</i>
                            </strong>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="flex items-center space-x-2.5"
                        >
                            <div>
                                <FaPeopleGroup size={25} className="text-red-500" />
                            </div>
                            <strong className="hidden sm:inline md:text-[24px] text-[18px] hover:!bg-gradient-to-r hover:!from-red-500 hover:!to-gray-800 hover:!inline-block hover:!text-transparent hover:!bg-clip-text">
                                <i>community</i>
                            </strong>
                        </Link>
                    </li>
                    <li>
                        <PiListDashesBold size={25} className="text-white" />
                    </li>
                </ul>
            </nav>
        </>

    )
};

export default FooterBar;
