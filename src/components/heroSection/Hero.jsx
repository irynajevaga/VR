import React, { useEffect, useRef, useContext } from "react";
import myContext from "../../context/data/myContext";
import "../../App.css"; // Подключение стилей

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    const descriptionRef1 = useRef(null);
    const descriptionRef2 = useRef(null);

    useEffect(() => {
        const animateTyping = (ref, text) => {
            const stringArray = text.split("");
            let typingInterval;

            const typeChar = () => {
                if (stringArray.length > 0) {
                    ref.current.innerHTML += stringArray.shift();
                } else {
                    clearInterval(typingInterval);
                }
            };

            typingInterval = setInterval(typeChar, 100);
            return () => clearInterval(typingInterval);
        };

        const text =
            "Veränderungen beginnen bei uns selbst. Ich bin bereit, dich in deinem Vorhaben zu unterstützen.";
        const cleanup1 = animateTyping(descriptionRef1, text);
        const cleanup2 = animateTyping(descriptionRef2, text);

        return () => {
            cleanup1();
            cleanup2();
        };
    }, []);

    return (
        <>
            {/* Первый блок */}
            <div className="flex container  h-[226px] pl-5 pt-5 items-start justify-start flex-col relative z-10 xl:hidden min-w-full"
              style={{
                backgroundImage: `url('src/assets/VR.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
            }}>
                <main className="animate-fadeIn">
                    <div className="text-left">
                        <div className="mb-4">
                            <h1
                                className={`font-bold text-3xl sm:text-4xl md:text-5xl ${
                                    mode === "dark" ? "text-[black]" : "text-[#372c45]"
                                }`}
                                style={{
                                    color:
                                        mode === "dark"
                                            ? "rgb(226, 232, 240)"
                                            : "rgb(30, 41, 59)",
                                    WebkitTextStroke: mode === "dark" ? "1px black" : "1px white",
                                }}
                            >
                                VERONIKA REIMER
                            </h1>
                        </div>

                        <p
                            className={`font-normal text-xl sm:text-2xl md:text-3xl ${
                                mode === "dark" ? "text-[black]" : "text-[#372c45]"
                            }`}
                            style={{
                                color:
                                    mode === "dark"
                                        ? "rgb(226, 232, 240)"
                                        : "rgb(30, 41, 59)",
                                WebkitTextStroke: mode === "dark" ? "0.4px black" : "0.4px white",
                            }}
                        >
                            COACHING
                        </p>

                        {/* Анимация текста */}
                        <div className="description max-w-full hidden md:flex">
                            <p
                                ref={descriptionRef1}
                                className={`description-line font-normal text-xl sm:text-2xl md:text-3xl ${
                                    mode === "dark" ? "text-[black]" : "text-[#372c45]"
                                }`}
                                style={{
                                    width: "339px",
                                    fontSize: "18px",
                                    marginTop: "40px",
                                    lineHeight: "22px",
                                    fontStyle: "italic",
                                    color:
                                        mode === "dark"
                                            ? "rgb(226, 232, 240)"
                                            : "rgb(30, 41, 59)",
                                    whiteSpace: "pre-wrap",
                                }}
                            ></p>
                        </div>
                    </div>
                </main>
            </div>

            {/* Второй блок */}
            <section
                style={{
                    backgroundImage: `url('src/assets/Hero10.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                }}
                className="relative overflow-hidden hidden xl:flex "
            >
                <div className="container mx-auto  px-5 py-24 items-start justify-start flex-col relative z-10">
                    <main className="animate-fadeIn">
                        <div className="text-left">
                            <div className="mb-4">
                                <h1
                                    className={`font-bold text-3xl sm:text-4xl md:text-5xl ${
                                        mode === "dark" ? "text-[black]" : "text-[#372c45]"
                                    }`}
                                    style={{
                                        color:
                                            mode === "dark"
                                                ? "rgb(226, 232, 240)"
                                                : "rgb(30, 41, 59)",
                                        WebkitTextStroke: mode === "dark" ? "1px black" : "1px white",
                                    }}
                                >
                                    VERONIKA REIMER
                                </h1>
                            </div>

                            <p
                                className={`font-normal text-xl sm:text-2xl md:text-3xl ${
                                    mode === "dark" ? "text-[black]" : "text-[#372c45]"
                                }`}
                                style={{
                                    color:
                                        mode === "dark"
                                            ? "rgb(226, 232, 240)"
                                            : "rgb(30, 41, 59)",
                                    WebkitTextStroke: mode === "dark" ? "0.4px black" : "0.4px white",
                                }}
                            >
                                COACHING
                            </p>

                            {/* Анимация текста */}
                            <div className="description max-w-full">
                                <p
                                    ref={descriptionRef2}
                                    className={`description-line font-normal text-xl sm:text-2xl md:text-3xl ${
                                        mode === "dark" ? "text-[black]" : "text-[#372c45]"
                                    }`}
                                    style={{
                                        width: "339px",
                                        fontSize: "18px",
                                        marginTop: "40px",
                                        lineHeight: "22px",
                                        fontStyle: "italic",
                                        color:
                                            mode === "dark"
                                                ? "rgb(226, 232, 240)"
                                                : "rgb(30, 41, 59)",
                                        whiteSpace: "pre-wrap",
                                    }}
                                ></p>
                            </div>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
