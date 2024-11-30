import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section
            style={{
                backgroundImage: `url('src/assets/Hero10.jpg')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}
            className="relative overflow-hidden"
        >
            {/* Hero Section */}
            <div className="container mx-auto flex px-5 py-24 items-start justify-start flex-col relative z-10">
                {/* Main Content */}
                <main className="animate-fadeIn">
                    <div className="text-left">
                        <div className="mb-4">
                            {/* Title */}
                            <h1
                                className={`font-bold text-3xl sm:text-4xl md:text-5xl ${
                                    mode === "dark" ? "text-[black]" : "text-[#372c45]"
                                }`}
                                style={{
                                   
                                   
                                }}
                            >
                                VERONIKA REIMER
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p
                            className={`font-light text-xl sm:text-2xl md:text-3xl ${
                                mode === "dark" ? "text-[black]" : "text-[#372c45]"
                            }`}
                            style={{
                              
                                
                            }}
                        >
                            COACHING
                        </p>
                        <p  className={`font-light text-xl sm:text-2xl md:text-3xl ${
                                mode === "dark" ? "text-[black]" : "text-[#372c45]"
                            }`}
                            style={{
                              fontSize:"16px",
                              marginTop:"40px",
                              lineHeight:"22px",
                              fontStyle:"italic",

                            }}>Veränderungen beginnen bei uns selbst.<br></br>Ich bin bereit, dich in deinem Vorhaben<br></br> zu unterstützen.</p>
                    </div>
                </main>
            </div>
           
            {/* Light Blur Filter */}
            {/* <div className="absolute inset-0 bg-black opacity-30 z-0 blur-md"></div> */}

            {/* Light Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-0"></div> */}
        </section>
    );
}

export default HeroSection;
