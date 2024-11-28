import { Typography } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <section
            style={{
                backgroundImage: `url('src/assets/Hero.jpg')`,
                backgroundSize: "cover",
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
                                className={`font-bold ${
                                    mode === "dark" ? "text-[#800020]" : "text-[#FFBF00]"
                                }`}
                                style={{
                                    fontSize: "3rem", // Размер заголовка
                                    lineHeight: "1.2", // Межстрочный интервал
                                }}
                                className="animate-title"
                            >
                                VERONIKA REIMER
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p
                            className={`font-light ${
                                mode === "dark" ? "text-[#FFBF00]" : "text-[#800020]"
                            }`}
                            style={{
                                fontSize: "1.5rem", // Размер текста подзаголовка
                                lineHeight: "2.5",
                                marginTop: "0.5rem",
                            }}
                            className="animate-subtitle"
                        >
                            COACHING
                        </p>
                    </div>
                </main>
            </div>

            {/* Light Blur Filter */}
            <div className="absolute inset-0 bg-black opacity-30 z-0 blur-md"></div>

            {/* Light Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-0"></div>
        </section>
    );
}

export default HeroSection;
