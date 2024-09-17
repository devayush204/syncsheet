"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import img1 from "@/public/assets/images/hero1.png"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TimelineDemo } from "@/components/ui/TimelineComponent";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

const LandingPage = () => {
    const { isSignedIn, user } = useUser(); // Get user state

    const navigation = [
        { title: "About Developer", path: "https://devayush.vercel.app/" },
        { title: "ContactUs", path: "https://devayush.vercel.app/" },
        { title: "Pricing", path: "/#pricing" }
    ]

    const plans = [
        {
            name: "Enterprise",
            desc: " Perfect for large teams or businesses needing advanced collaboration and security features.",
            price: 32,
            isMostPop: true,
            features: [
                "Unlimited collaborative documents",
                "Advanced security and encryption",
                "Real-time comments and feedback",
                "Seamless cloud integration",
                "Version control with unlimited history",
                "Priority support",
                "Custom branding"
            ],
        },
        {
            name: "Startup",
            desc: "Ideal for small teams or individual users looking for efficient collaboration tools at a budget.",
            price: 12,
            isMostPop: false,
            features: [
                "Up to 10 collaborative documents",
                "Basic security and encryption",
                "Real - time comments and feedback",
                "Cloud integration",
                "Basic version control",
                "Email support"
            ],
        },
    ];
    const footerNavs = [
        {
            href: 'https://devayush.vercel.app/',
            name: 'Terms'
        },
        {
            href: 'https://devayush.vercel.app/',
            name: 'ContactUs'
        },
        {
            href: '/#pricing',
            name: 'Pricing'
        },
        {
            href: 'https://devayush.vercel.app/',
            name: 'About us'
        }
    ]



    return (
        <div className="bg-gray-900 w-screen overflow-hidden relative">
            <header className="flex flex-row bg-gray-900/85 backdrop-blur-sm z-[1000] items-center w-full justify-between md:px-32 px-4 py-5 md:py-6 fixed shadow-lg">
                <div className="">
                    <Link className="md:text-4xl text-base font-extrabold text-white" href="/">
                        SYNCSHEET
                    </Link>
                </div>

                <div className="gap-x-5 items-center   md:flex "> {
                    navigation.map((item, idx) => {
                        return (
                            <li key={idx} className="text-gray-300 hover:text-gray-400 list-none hidden md:block">
                                <a href={item.path} className="block">
                                    {item.title}
                                </a>
                            </li>
                        )
                    })
                }

                    {!isSignedIn ? (
                        <button className="hover:translate-x-4 transition-all cursor-pointer">
                            <Link
                                href="/sign-in"
                                className="flex items-center list-none justify-center gap-x-1 py-2 px-4 text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg md:inline-flex"
                            >
                                Sign in
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </button>
                    ) : (
                        <div className="flex items-center gap-x-4">
                            {/* Profile Button */}
                            <div className="hidden md:block">
                                <UserButton />
                            </div>

                            {/* Sign out Button */}
                            <SignOutButton>
                                <button className="text-white bg-red-500 hover:bg-red-600 text-xs md:text-base p-2 md:py-2  md:px-4 rounded-lg">
                                    Sign out
                                </button>
                            </SignOutButton>
                        </div>
                    )}

                </div>
            </header>
            <section className="relative md:px-32 px-4 h-screen flex md:flex-row flex-col  items-center justify-center mt-32 md:mt-0">
                <div className="relative flex md:flex-row flex-col flex-1 z-10  ">
                    <div className="space-y-5  text-center">
                        <p className="text-2xl text-white font-extrabold mx-auto md:text-5xl">
                            Build and Collaborate  with the Best Tools
                        </p>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            Transform the way you work with our next-gen collaborative editor. Real-time editing, effortless sharing, and powerful features to boost productivity. Experience a platform designed for teams to create, manage, and scale up efficiently.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                            />
                            <Link href={"/home"}>
                                <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 group hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                    Start Writing
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 group-hover:translate-x-2 transition-all">
                                        <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>

                {/* for larger screena */}
                <div className="flex-1 mt-5">
                    <Image src={img1} alt="heroimg" objectFit="contain" />
                </div>


            </section>

            <section>
                <TimelineDemo />
            </section>


            <section className='relative py-14 bg-gray-900' id="pricing">
                <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
                <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
                    <div className='max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0'>
                        <h3 className="text-blue-400 font-semibold">
                            Pricing
                        </h3>
                        <p className='text-white text-3xl font-semibold sm:text-4xl'>
                            Pay as you grow
                        </p>
                        <div className='max-w-xl'>
                            <p>
                                Buy the plans to get seamless features and full access.
                            </p>
                        </div>
                    </div>
                    <div className='mt-16 justify-center sm:flex'>
                        {
                            plans.map((item, idx) => (
                                <div key={idx} className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md ${item.isMostPop ? "bg-gray-900 border-cyan-400 border-x-0 sm:border-x-2" : "border-transparent"}`}>
                                    <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
                                        <span className='text-gray-200 font-medium'>
                                            {item.name}
                                        </span>
                                        <div className='text-blue-400 text-3xl font-semibold'>
                                            ${item.price} <span className="text-xl font-normal">/mo</span>
                                        </div>
                                        <p className="text-gray-400">
                                            {item.desc}
                                        </p>
                                        <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-blue-500 hover:bg-blue-400 active:bg-cyan-700'>
                                            Get Started
                                        </button>
                                    </div>
                                    <ul className='p-4 py-8 space-y-3 md:p-8'>
                                        {
                                            item.features.map((featureItem, idx) => (
                                                <li key={idx} className='flex items-center gap-5'>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        className={`h-5 w-5 ${item.isMostPop ? "text-blue-400" : ""}`}
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'>
                                                        <path
                                                            fill-rule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clip-rule='evenodd'></path>
                                                    </svg>
                                                    {featureItem}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <footer className="pt-32">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                        <Link className="text-4xl font-extrabold text-white" href="/">
                            SYNCSHEET
                        </Link>
                        <p>
                            Nulla auctor metus vitae lectus iaculis, vel euismod massa efficitur.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                            <a href="javascript:void(0)" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Let&apos;s get started
                            </a>
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                                Get access
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                        <p>© 2024 SYNCSHEET Inc. All rights reserved.</p>
                        <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                            {
                                footerNavs.map((item, idx) => (
                                    <li className="text-gray-800 hover:text-gray-500 duration-150" key={idx}>
                                        <a key={idx} href={item.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </footer>

            <div className=" fixed inset-0 m-auto opacity-80 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
        </div>
    )
}


export default LandingPage