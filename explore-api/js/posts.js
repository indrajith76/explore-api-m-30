function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const Postdiv = document.createElement('div');
        Postdiv.classList.add('post')
        Postdiv.innerHTML = `
            <h4>User-${post.id}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `
        postsContainer.appendChild(Postdiv);
    }
    console.log(postsContainer);
}

loadPosts()