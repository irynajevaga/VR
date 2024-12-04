// import React from "react";
// import { Navbar, IconButton, Avatar, Collapse } from "@material-tailwind/react";
// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import myContext from "../../context/data/myContext";
// import email from "../../assets/email.svg"
// import phone from "../../assets/phone.svg"

// export default function Nav() {
//     const [openNav, setOpenNav] = React.useState(false);
//     const context = useContext(myContext);
//     const { mode, toggleMode } = context;
//     const admin = localStorage.getItem("admin");

//     return (
//         <>
//             <Navbar
//                 className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
//                 style={{
//                     background: mode === "dark"
//                         ? "rgb(30, 41, 59)" 
//                         : "rgba(280, 245, 220, 0.2)", 
//                     backdropFilter: "blur(90px)", 
//                     WebkitBackdropFilter: "blur(90px)", // Поддержка для Safari
//                 }}
//             >
//                 <div className="flex items-center justify-between text-blue-gray-900">
//                     {/* Logo */}
//                     <Link to={"/"}>
//                         <div
//                             className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
//                             style={{
//                                 color: mode === "dark" ? "white" : "black",
//                             }}
//                         >
//                             <img
//                                 className="w-10 h-10 object-contain"
//                                 src="src/assets/logo.svg"
//                                 alt="Logo"
//                             />
//                         </div>
//                     </Link>
//                     <Link to="tel:+49 151 11244699">+ 49 151 11244699</Link> 
//                     <a style={{marginLeft: "10px"}} href="mailto:reimer.nika@gmail.com">reimer.nika@gmail.com</a>
//                     {/* Social Media Icons */}
//                     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//                         <a
//                             className="text-gray-500"
//                             href="https://www.facebook.com/"
//                         >
//                             <svg
//                                 fill="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 className="w-8 h-8" // Увеличенный размер
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//                             </svg>
//                         </a>
//                         <a
//                             className="ml-5 text-gray-500" // Увеличенный отступ
//                             href="https://twitter.com/home?lang=en"
//                         >
//                             <svg
//                                 fill="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 className="w-8 h-8"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//                             </svg>
//                         </a>
//                         <a
//                             className="ml-5 text-gray-500"
//                             href="https://www.instagram.com/"
//                         >
//                             <svg
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 className="w-8 h-8"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <rect
//                                     width={20}
//                                     height={20}
//                                     x={2}
//                                     y={2}
//                                     rx={5}
//                                     ry={5}
//                                 />
//                                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
//                             </svg>
//                         </a>
//                     </span>

//                     {/* Navigation Items */}
//                     <div className="flex items-center gap-8">
//                         {/* Admin Profile Picture */}
//                         {admin && (
//                             <Link to={"/dashboard"}>
//                                 <Avatar
//                                     src={
//                                         "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
//                                     }
//                                     alt="avatar"
//                                     withBorder={true}
//                                     className="p-0.5 text-red-500 w-12 h-12"
//                                     style={{
//                                         border:
//                                             mode === "dark"
//                                                 ? "2px solid rgb(226, 232, 240)"
//                                                 : "2px solid rgb(30, 41, 59)",
//                                     }}
//                                 />
//                             </Link>
//                         )}

//                         {/* Theme Toggle Button */}
//                         <div>
//                             <IconButton
//                                 onClick={toggleMode}
//                                 className="rounded-full ml-12" 
//                                 style={{
//                                     background: mode === "light"
//                                         ? "#ced6e0"
//                                         : "#57606f",
//                                     color: mode === "dark" ? "white" : "black",
//                                 }}
//                             >
//                                 {mode === "light" ? (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth={1.5}
//                                         stroke="currentColor"
//                                         className="w-6 h-6 text-black"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
//                                         />
//                                     </svg>
//                                 ) : (
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         strokeWidth={1.5}
//                                         stroke="currentColor"
//                                         className="w-6 h-6"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
//                                         />
//                                     </svg>
//                                 )}
//                             </IconButton>
//                         </div>
//                     </div>
//                 </div>
//             </Navbar>
//         </>
//     );
// }

import React from "react";
import { Navbar, IconButton, Avatar } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";

export default function Nav() {
    const [openNav, setOpenNav] = React.useState(false);
    const context = useContext(myContext);
    const { mode, toggleMode } = context;
    const admin = localStorage.getItem("admin");

    return (
        <>
            <Navbar
                className="sticky inset-0 z-20 h-max max-w-full border-none rounded-none py-2 px-4 lg:px-8 lg:py-2"
                style={{
                    background: mode === "dark"
                        ? "rgb(30, 41, 59)"
                        : "rgba(280, 245, 220, 0.2)",
                    backdropFilter: "blur(90px)",
                    WebkitBackdropFilter: "blur(90px)", // Поддержка для Safari
                }}
            >
                <div className="flex items-center justify-between text-blue-gray-900">
                    {/* Logo */}
                    <Link to={"/"}>
                        <div
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
                            style={{
                                color: mode === "dark" ? "white" : "black",
                            }}
                        >
                            <img
                                className="w-10 h-10 object-contain"
                                src="src/assets/logo.svg"
                                alt="Logo"
                            />
                        </div>
                    </Link>

                    {/* Phone and Email */}
                    <div className="flex items-center gap-4">
                        {/* Phone */}
                        <Link
                            to="tel:+49 151 11244699"
                            className="hidden sm:inline-block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
                        >
                            +49 151 11244699
                        </Link>
                        <Link
                            to="tel:+49 151 11244699"
                            className="sm:hidden cursor-pointer hover:text-orange-500"
                        >
                            <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.88 19.88 0 013 5.11 2 2 0 015 3h3a2 2 0 012 1.72 12.05 12.05 0 001.45 4.7 2 2 0 01-.45 2.11L9.03 12.03a16 16 0 007 7l2.19-2.14a2 2 0 012.11-.45 12.05 12.05 0 004.7 1.45A2 2 0 0122 16.92z" />
                            </svg>
                        </Link>

                        {/* Email */}
                        <a
                            href="mailto:reimer.nika@gmail.com"
                            className="hidden sm:inline-block text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors"
                        >
                            reimer.nika@gmail.com
                        </a>
                        <a
                            href="mailto:reimer.nika@gmail.com"
                            className="sm:hidden cursor-pointer hover:text-orange-500"
                        >
                            <svg
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2.4 4.25l-5.2 3.25c-.35.22-.8.22-1.15 0L6.4 8.25A.5.5 0 016 7.75c0-.41.45-.67.8-.42L12 10.5l5.2-3.17c.35-.25.8.01.8.42 0 .19-.1.37-.4.5z" />
                            </svg>
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a
                            className="text-gray-500 hover:text-orange-500 transition-colors"
                            href="https://www.facebook.com/"
                        >
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>
                        <a
                            className="ml-5 text-gray-500 hover:text-orange-500 transition-colors"
                            href="https://twitter.com/home?lang=en"
                        >
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>
                        <a
                            className="ml-5 text-gray-500 hover:text-orange-500 transition-colors"
                            href="https://www.instagram.com/"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    width={20}
                                    height={20}
                                    x={2}
                                    y={2}
                                    rx={5}
                                    ry={5}
                                />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>
                    </span>
                </div>
            </Navbar>
        </>
    );
}
