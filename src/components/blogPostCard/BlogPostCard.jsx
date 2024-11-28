import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { useNavigate } from "react-router";

function BlogPostCard() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;

    const navigate = useNavigate();

    // Путь к картинке и заголовок по умолчанию для пустых карточек
    const defaultThumbnail = "src/assets/Card_mich.jpg"; 
    const defaultTitle = "Über mich"; 
    const onlineThumbnail = "src/assets/Card_online.jpg"; 
    const onlineTitle = "Online";

    // Добавляем пустые карточки и вторую карточку "Online"
    const emptyCards = [
        {}, // Первая пустая карточка
        { thumbnail: onlineThumbnail, title: onlineTitle }, // Вторая карточка с названием "Online"
        {}, // Третья пустая карточка
        {}, // Четвертая пустая карточка
    ];

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl ">
                    {/* Main Content  */}
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {/* Карточки */}
                        {emptyCards.map((item, index) => {
                            const thumbnail = item.thumbnail || defaultThumbnail; // Используем картинку по умолчанию или картинку из объекта
                            const title = item.title || defaultTitle; // Используем заголовок по умолчанию или заголовок из объекта

                            return (
                                <div
                                    className="p-4 md:w-1/3"
                                    key={index}
                                >
                                    <div
                                        style={{
                                            background:
                                                mode === "dark"
                                                    ? "rgb(30, 41, 59)"
                                                    : "white",
                                            borderBottom:
                                                mode === "dark"
                                                    ? " 4px solid rgb(226, 232, 240)"
                                                    : " 4px solid rgb(30, 41, 59)",
                                        }}
                                        className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                        ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
                                        rounded-xl overflow-hidden`}
                                    >
                                        {/* Изображение */}
                                        <img
                                            onClick={() =>
                                                navigate(`/bloginfo/1`)} // Переход на блог
                                            className="w-full h-64 object-cover"
                                            src={thumbnail} // Путь к картинке
                                            alt="blog"
                                        />

                                        {/* Заголовок */}
                                        <div className="p-6">
                                            <h1
                                                className="title-font text-lg font-bold text-gray-900 mb-3"
                                                style={{
                                                    color:
                                                        mode === "dark"
                                                            ? "rgb(226, 232, 240)"
                                                            : " rgb(30, 41, 59)",
                                                }}
                                            >
                                                {title} {/* Заголовок */}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* See More Button  */}
                    <div className="flex justify-center my-5">
                        <Button
                            style={{
                                background:
                                    mode === "dark"
                                        ? "rgb(226, 232, 240)"
                                        : "rgb(30, 41, 59)",
                                color:
                                    mode === "dark"
                                        ? "rgb(30, 41, 59)"
                                        : "rgb(226, 232, 240)",
                            }}
                        >
                            See More
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogPostCard;
