//Create a new posts array from
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
// Create a new listPosts function which lists all posts
//Listposts function returns a promise

const listPosts = () => {
  return new Promise((resolve, reject) => {
    if (posts) {
      posts.forEach((post) => {
        console.log(post.title);
      });
      resolve(posts);
    } else {
      reject("Bir hata oluştu");
    }
  });
};
// Create a new addPost function which adds a new post to posts array
// addPost function returns a promise

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

// addPost({ title: "Post 5", author: "  Author 5", content: "Content 5" })
//   .then(listPosts())
//   .catch((err) => console.log(err));
//showPosts function uses async/await
//showPosts function calls listPosts and addPost functions

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
