import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
const Trial = () => {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <h2
                className={`px-[60px] py-10 font-bold text-2xl sm:text-2xl md:text-3xl ${
                    mode === "dark" ? "text-[black]" : "text-[#372c45]"
                }`}
                style={{
                    color:
                        mode === "dark"
                            ? "rgb(226, 232, 240)"
                            : "rgb(30, 41, 59)",
                }}
            >Das Kennenlerngespräch</h2>
            <p
            className={`px-[60px] py-5 font-normal text-xl sm:text-1l md:text-3l ${
                mode === "dark" ? "text-[black]" : "text-[#372c45]"
            }`}
            style={{
                color:
                    mode === "dark"
                        ? "rgb(226, 232, 240)"
                        : "rgb(30, 41, 59)",
            }}
            >Kunden wenden sich an mich mit Themen des beruflichen Wachstums, Konfliktklärung, Lebenskrisen und Veränderungen, Persönlichkeitsentwicklung. Auch persönliche Themen wie Beziehungen, Ängste und Kontrolle, Selbstwertarbeit und die Frage nach dem Lebenszweck werden von meinen Kunden angesprochen. Durch einen individuellen Ansatz und eine intensive Erforschung des jeweiligen Themas können wir einen handlungsorientierten Plan entwickeln, der es Dir ermöglicht, auf komfortable Weise voranzukommen. Vielleicht die Stärken oder auch möglicherweise vorhandene Schwächen zu erkennen. Gemeinsam definieren wir Ziele und arbeiten an ihrer Verwirklichung.</p>
        </div>
    )
}

export default Trial