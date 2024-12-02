import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
    Timestamp,
    addDoc,
    collection,
    doc,
    getDoc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import myContext from "../../context/data/myContext";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

function BlogInfo() {
    const { mode, setloading, loading } = useContext(myContext);
    const params = useParams();

    const [getBlogs, setGetBlogs] = useState();
    const [allComment, setAllComment] = useState([]);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [commentText, setCommentText] = useState("");

    const getAllBlogs = async () => {
        setloading(true);
        try {
            const docSnapshot = await getDoc(doc(fireDB, "blogPost", params.id));
            if (docSnapshot.exists()) {
                setGetBlogs(docSnapshot.data());
            } else {
                console.error("Документ не существует");
            }
            setloading(false);
        } catch (error) {
            console.error(error);
            setloading(false);
        }
    };

    const getComments = async () => {
        try {
            const q = query(
                collection(fireDB, `blogPost/${params.id}/comment`),
                orderBy("time", "desc")
            );
            onSnapshot(q, (snapshot) => {
                const commentsArray = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setAllComment(commentsArray);
            });
        } catch (error) {
            console.error(error);
        }
    };

    const addComment = async () => {
        if (!fullName || !email || !commentText) {
            toast.error("Bitte füllen Sie alle Felder aus.");
            return;
        }
        try {
            await addDoc(
                collection(fireDB, `blogPost/${params.id}/comment`),
                {
                    fullName,
                    email,
                    commentText,
                    time: Timestamp.now(),
                    date: new Date().toLocaleString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    }),
                }
            );
            toast.success("Kommentar erfolgreich hinzugefügt!");
            setFullName("");
            setEmail("");
            setCommentText("");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllBlogs();
        getComments();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`max-w-4xl mx-auto px-4 py-8 ${mode === "dark" ? " text-white" : " text-gray-800"}`}>
            {loading ? (
                <div className="text-center">Wird geladen...</div>
            ) : (
                <>
                    {getBlogs && (
                        <>
                            <h1 className="text-2xl font-bold mb-2">{getBlogs.blogs.title}</h1>
                            <p className="text-sm text-gray-500 mb-4">{getBlogs.date}</p>
                            <div
                                className="prose lg:prose-xl mb-8"
                                dangerouslySetInnerHTML={{ __html: getBlogs.blogs.content }}
                            />
                        </>
                    )}
                </>
            )}
            <div className="border-t pt-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Kontaktformular</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="* Name"
                        className="w-full p-3 border rounded-md bg-[#f3faff]"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="* E-Mail"
                        className="w-full p-3 border rounded-md bg-[#f3faff]"
                    />
                    <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Hinterlassen Sie eine Nachricht"
                        className="w-full p-3 border rounded-md bg-[#f3faff]"
                        rows="4"
                    />
                    <button
                        onClick={addComment}
                        className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    >
                       Senden
                    </button>
                </div>
            </div>
            <div className="mt-8">
                {allComment.length > 0 && (
                    <>
                        <h2 className="text-xl font-semibold mb-4">Kommentare</h2>
                        <div className="space-y-4">
                            {allComment.map((comment) => (
                                <div
                                    key={comment.id}
                                    className={`p-4 border rounded-md shadow-sm ${
                                        mode === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                                    }`}
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="font-bold">{comment.fullName}</p>
                                        <p className="text-xs text-gray-500">{comment.date}</p>
                                    </div>
                                    <p>{comment.commentText}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default BlogInfo;
