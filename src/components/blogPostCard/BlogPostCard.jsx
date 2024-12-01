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
            <div
                style={{ margin: "60px auto 20px", width: "55%" }}
                className={`border-b mb-5 ${
                    mode === "dark" ? "border-gray-600" : "border-gray-400"
                }`}
            />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl">
                    {/* Main Content */}
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 justify-center">
                        {cards.map((item, index) => (
                            <div key={index} className="relative mx-auto w-full  sm:w-2/3 md:w-1/2 lg:w-full  min-w-[300px]">
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
                </div>
            </section>
        </div>
    );
}

export default BlogPostCard;
