import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import myContext from "../../context/data/myContext";

const Topics = () => {
    const context = useContext(myContext);
    const { mode } = context;

    const topics = [
        "Professionelle Klarheit/Erfolge",
        "Berufliche Neuorientierung",
        "Wege zur Selbstständigkeit",
        "Konfliktlösung",
        "Entscheidungsfindung",
        "Chancen und Potenzial erkennen",
        "Selbstreflexion",
        "Kommunikation im Unternehmen",
        "Beziehung",
        "Angst und Kontrolle",
        "Arbeit an Selbstwertgefühl",
        "Die Suche nach der eigenen Berufung",
        "Lebenszweck",
        "Verwirklichung des Lebensplans",
        "Veränderungen im Leben/Umzug",
    ];

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
        mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
    };

    return (
        <div className="px-10 py-10">
            <h2
                className={`px-5 py-10 font-bold text-2xl sm:text-2xl md:text-3xl ${
                    mode === "dark" ? "text-[black]" : "text-[#372c45]"
                }`}
                style={{
                    color:
                        mode === "dark"
                            ? "rgb(226, 232, 240)"
                            : "rgb(30, 41, 59)",
                }}
            >
                Die Themen im Coaching
            </h2>
            <p
                className={`px-5 py-5 font-normal text-xl sm:text-1l md:text-3l ${
                    mode === "dark" ? "text-[black]" : "text-[#372c45]"
                }`}
                style={{
                    color:
                        mode === "dark"
                            ? "rgb(226, 232, 240)"
                            : "rgb(30, 41, 59)",
                }}
            >
                Kunden wenden sich an mich mit Themen des beruflichen Wachstums, Konfliktklärung, Lebenskrisen und Veränderungen, Persönlichkeitsentwicklung. Auch persönliche Themen wie Beziehungen, Ängste und Kontrolle, Selbstwertarbeit und die Frage nach dem Lebenszweck werden von meinen Kunden angesprochen. Durch einen individuellen Ansatz und eine intensive Erforschung des jeweiligen Themas können wir einen handlungsorientierten Plan entwickeln, der es Dir ermöglicht, auf komfortable Weise voranzukommen. Vielleicht die Stärken oder auch möglicherweise vorhandene Schwächen zu erkennen. Gemeinsam definieren wir Ziele und arbeiten an ihrer Verwirklichung.
            </p>

            <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={3000}
                showDots
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                customDotListClass="custom-dot-list"
            >
                {topics.map((topic, index) => (
                    <div key={index} className="p-4">
                        <div
                            className={`carousel-cards p-6 rounded-lg shadow-lg transition-all ${
                                mode === "dark"
                                    ? "bg-gray-800 text-white"
                                    : "bg-gray-200 text-gray-900"
                            }`}
                        >
                            <h3 className="font-semibold text-center">{topic}</h3>
                        </div>
                    </div>
                ))}
            </Carousel>

            <style jsx>{`
                .react-multi-carousel-track{
                height: 150px;
                }
                .react-multi-carousel-dot-list  {
                    position: absolute;
                    bottom: 0;
                    text-align: center;
                }
                .react-multi-carousel-dot button {
                    background-color: #999; /* Цвет точек */
                    border: none;
                }
                .react-multi-carousel-dot--active button {
                    background-color: #444; /* Цвет активной точки */
                }
                .carousel-cards {
                height: 100px;
                display: flex;
                justify-content: center;
                align-items: center;

                }
            `}</style>
        </div>
    );
};

export default Topics;
