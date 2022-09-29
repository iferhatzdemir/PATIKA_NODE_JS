let posts = [
  {
    title: "Post 1",
    author: "  Author 1",
    content: "Content 1",
  },
  {
    title: "Post 2",
    author: "  Author 2",
    content: "Content 2",
  },
  {
    title: "Post 3",
    author: "  Author 3",
    content: "Content 3",
  },
  {
    title: "Post 4",
    author: "  Author 4",
    content: "Content 4",
  },
];

const listPosts = () => {
  return new Promise((resolve, reject) => {
    if (posts) {
      resolve(posts);
    } else {
      reject("Bir hata oluştu");
    }
  });
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost) {
      posts.push(newPost);
      resolve(posts);
    } else {
      reject("Bir hata oluştu");
    }
  });
};

const showPosts = async () => {
  try {
    await addPost({
      title: "Post 5",
      author: "  Author 5",
      content: "Content 5",
    });
    console.log(await listPosts());
  } catch (err) {
    console.error(err);
  }
};
showPosts();
