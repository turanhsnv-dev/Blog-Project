const getPost = async () => {
    const response = await fetch("http://localhost:5000/softwareblogs");
    const data = await response.json();
    return data;
};

export const createPost = async (post) => {
    const posts = await getPost();

    const maxId = posts.length > 0 ? Math.max(...posts.map((p) => p.id || 0)) : 0;

    const newPost = { ...post, id: maxId + 1 };


    await fetch("http://localhost:5000/softwareblogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
    });
};