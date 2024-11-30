import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { useNavigate } from "react-router";

function BlogPostCard() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;

    const navigate = useNavigate();

    // Карточки с фото и заголовками
    const cards = [
        { thumbnail: "src/assets/Card_mich2.jpg", title: "Über mich" },
        { thumbnail: "src/assets/Card_online.jpg", title: "Online", adjustPosition: true }, // Добавлено поле adjustPosition
        { thumbnail: "src/assets/Card_feedback4.jpg", title: "Feedback" },
    ];

    return (
        <div>
             <div style={{margin:"60px auto 20px",width:"55%",}}
                                className={`border-b mb-5 ${
                                    mode === "dark"
                                        ? "border-gray-600"
                                        : "border-gray-400"
                                }`}
                            />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl">
                    {/* Main Content */}
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {cards.map((item, index) => (
                            <div className="p-4 md:w-1/3" key={index}>
                                <div
                                    onClick={() => navigate(`/bloginfo/${index + 1}`)} // Переход на блог
                                    style={{
                                        backgroundImage: `url(${item.thumbnail})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: item.adjustPosition
                                            ? "center 25%" // Опускаем картинку для "Online"
                                            : "center", // Для других карточек стандартное выравнивание
                                        backgroundRepeat: "no-repeat",
                                    }}
                                    className={`h-64 rounded-xl shadow-lg hover:-translate-y-1 cursor-pointer 
                                    ${mode === "dark" ? "shadow-gray-700" : "shadow-gray-400"} 
                                    flex items-end overflow-hidden`}
                                >
                                    {/* Заголовок */}
                                    <div
                                        className="w-full p-4"
                                        style={{
                                            background:
                                                mode === "dark"
                                                    ? "rgba(0, 0, 0, 0.6)"
                                                    : "rgba(255, 255, 255, 0.8)",
                                        }}
                                    >
                                        <h1
                                            className="text-lg font-bold"
                                            style={{
                                                color:
                                                    mode === "dark"
                                                        ? "rgb(226, 232, 240)"
                                                        : "rgb(30, 41, 59)",
                                            }}
                                        >
                                            {item.title}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* See More Button */}
                    {/* <div className="flex justify-center my-5">
                        <Button
                            style={{
                                background:
                                    mode === "dark"
                                        ? "#372c45"
                                        : "rgba(211, 211, 211, 0.6)",
                                color:
                                    mode === "dark"
                                        ? "rgb(226, 232, 240)"
                                        : "rgb(30, 41, 59)",
                                fontWeight: "bold",
                                padding: "10px 20px",
                                borderRadius: "8px",
                            }}
                        >
                            See More
                        </Button>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default BlogPostCard;
