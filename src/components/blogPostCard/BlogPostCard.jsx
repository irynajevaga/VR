import React, { useContext, useState } from "react";
import myContext from "../../context/data/myContext";

function BlogPostCard() {
    const context = useContext(myContext);
    const { mode } = context;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [isTextVisible, setIsTextVisible] = useState(false);

    const cards = [
        { thumbnail: "src/assets/Card_mich2.jpg", 
        title: "Über mich", 
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nunc nec magna tempor fermentum. 
        Nullam vehicula, justo non blandit finibus, justo lectus feugiat sapien, a suscipit nunc nulla id metus. 
        Suspendisse viverra convallis purus nec gravida. Maecenas tristique nisi in nibh consequat, non porta justo porta. 
        Praesent euismod enim a enim suscipit pharetra. Quisque sit amet mi velit. Ut in tempor lacus. Aliquam volutpat non lectus sed vehicula. 
        Integer a justo sit amet ipsum dignissim interdum id sed nisi. Nullam et facilisis metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nunc nec magna tempor fermentum. 
        Nullam vehicula, justo non blandit finibus, justo lectus feugiat sapien, a suscipit nunc nulla id metus. 
        Suspendisse viverra convallis purus nec gravida. Maecenas tristique nisi in nibh consequat, non porta justo porta. 
        Praesent euismod enim a enim suscipit pharetra. Quisque sit amet mi velit. Ut in tempor lacus. Aliquam volutpat non lectus sed vehicula. 
        Integer a justo sit amet ipsum dignissim interdum id sed nisi. Nullam et facilisis metus.`,},
        { thumbnail: "src/assets/Card_online.jpg", 
        title: "Online",
         content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nunc nec magna tempor fermentum. 
        Nullam vehicula, justo non blandit finibus, justo lectus feugiat sapien, a suscipit nunc nulla id metus. 
        Suspendisse viverra convallis purus nec gravida. Maecenas tristique nisi in nibh consequat, non porta justo porta. 
        Praesent euismod enim a enim suscipit pharetra. Quisque sit amet mi velit. Ut in tempor lacus. Aliquam volutpat non lectus sed vehicula. 
        Integer a justo sit amet ipsum dignissim interdum id sed nisi. Nullam et facilisis metus.`, },
        { thumbnail: "src/assets/Card_feedback4.jpg", 
        title: "Feedback", 
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at nunc nec magna tempor fermentum. 
        Nullam vehicula, justo non blandit finibus, justo lectus feugiat sapien, a suscipit nunc nulla id metus. 
        Suspendisse viverra convallis purus nec gravida. Maecenas tristique nisi in nibh consequat, non porta justo porta. 
        Praesent euismod enim a enim suscipit pharetra. Quisque sit amet mi velit. Ut in tempor lacus. Aliquam volutpat non lectus sed vehicula. 
        Integer a justo sit amet ipsum dignissim interdum id sed nisi. Nullam et facilisis metus.`, },
    ];

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
        // Показываем текст через 1 секунду
        setTimeout(() => setIsTextVisible(true), 1000);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsTextVisible(false); // Скрыть текст
    };

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
                    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 justify-center">
                        {cards.map((item, index) => (
                            <div key={index} className="relative mx-auto w-full sm:w-2/3 md:w-1/2 lg:w-full min-w-[300px]">
                                <div
                                    onClick={() => openModal(item.content)} // Открыть модальное окно
                                    style={{
                                        backgroundImage: `url(${item.thumbnail})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                    className={`h-64 rounded-xl shadow-lg hover:-translate-y-1 cursor-pointer 
                                    ${mode === "dark" ? "shadow-gray-700" : "shadow-gray-400"} 
                                    flex items-end overflow-hidden`}
                                >
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

            {/* Модальное окно */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative animate-[load_1.2s_forwards]"
                        style={{
                            animation: "load 1.2s forwards",
                        }}
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        {/* Плавное появление текста */}
                        <p
                            className={`text-gray-700 transform transition-all duration-700 ${
                                isTextVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                        >
                            {modalContent}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogPostCard;
