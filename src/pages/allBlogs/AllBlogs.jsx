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
                    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
    {getAllBlog.length > 0 ? (
        <>
            {getAllBlog.map((item, index) => {
                const thumbnail = "src/assets/Card_mich.jpg";
                const title = "Новая статья";

                return (
                    <div
                        key={index}
                        className="rounded-lg shadow-lg overflow-hidden bg-white"
                    >
                        <img
                            onClick={() => navigate(`/bloginfo/${item.id}`)}
                            className="w-full h-64 object-cover"
                            src={thumbnail}
                            alt="blog"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{title}</h2>
                        </div>
                    </div>
                );
            })}
        </>
    ) : (
        <h1 className="text-xl font-bold">Not Found</h1>
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
