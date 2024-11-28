import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import { useNavigate } from "react-router";

function BlogPostCard() {
    const context = useContext(myContext);
    const { mode, getAllBlog } = context;

    const navigate = useNavigate();

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto max-w-7xl ">
                    {/* Main Content  */}
                    <div className="flex flex-wrap justify-center -m-4 mb-5">
                        {/* Card 1  */}
                        {getAllBlog.length > 0 ? (
                            <>
                                {getAllBlog.map((item, index) => {
                                    // Заменяем старое название и картинку
                                    const thumbnail = "src/assets/Card_mich.jpg"; 
                                    const title = "Новая статья"; // Новое название

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
                                                {/* Blog Thumbnail - изменена картинка */}
                                                <img
                                                    onClick={() =>
                                                        navigate(
                                                            `/bloginfo/${item.id}`
                                                        )
                                                    }
                                                    className="w-full h-64 object-cover"
                                                    src={thumbnail}  // Новый путь
                                                    alt="blog"
                                                />

                                                {/* Top Items  */}
                                                <div className="p-6">
                                                    {/* Blog Title - изменено название */}
                                                    <h1
                                                        className="title-font text-lg font-bold text-gray-900 mb-3"
                                                        style={{
                                                            color:
                                                                mode === "dark"
                                                                    ? "rgb(226, 232, 240)"
                                                                    : " rgb(30, 41, 59)",
                                                        }}
                                                    >
                                                        {title}  {/* Новое название */}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <h1 className="text-xl font-bold">Not Found</h1>
                            </>
                        )}
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
