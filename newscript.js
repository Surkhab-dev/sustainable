// JavaScript: script.js

const forumPostsElement = document.getElementById('forum-posts');
const postForm = document.getElementById('postForm');

document.addEventListener('DOMContentLoaded', loadPosts);
postForm.addEventListener('submit', handlePostFormSubmit);

function loadPosts() {
    const posts = getPostsFromLocalStorage();
    forumPostsElement.innerHTML = '';

    posts.forEach(post => {
        const postElement = createPostElement(post);
        forumPostsElement.appendChild(postElement);
    });
}

function handlePostFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newPost = {
        id: Date.now().toString(),
        title,
        content,
        replies: [],
        timestamp: new Date().toISOString()
    };

    const posts = getPostsFromLocalStorage();
    posts.push(newPost);
    savePostsToLocalStorage(posts);
    loadPosts();

    postForm.reset();
}

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    postElement.innerHTML = `
        <div class="post-header">
            <h2>${post.title}</h2>
            <span class="timestamp">Posted on: ${new Date(post.timestamp).toLocaleString()}</span>
        </div>
        <p>${post.content}</p>
        <button class="reply-btn" onclick="toggleReplies('${post.id}')">Show Replies</button>
        <div class="replies" id="reply-${post.id}" style="display: none;">
            ${post.replies.map(reply => createReplyElement(reply, post.id)).join('')}
        </div>
        <form onsubmit="replyToPost(event, '${post.id}')">
            <input type="text" name="author" placeholder="Your name" required>
            <input type="text" name="content" placeholder="Your reply" required>
            <button type="submit">Reply</button>
        </form>
    `;

    return postElement;
}

function createReplyElement(reply, postId) {
    return `
        <div class="reply" id="reply-${postId}-${reply.id}">
            <strong>${reply.author}:</strong> ${reply.content}
            <span class="timestamp">${new Date(reply.timestamp).toLocaleString()}</span>
        </div>
    `;
}

function toggleReplies(postId) {
    const repliesElement = document.getElementById(`reply-${postId}`);
    if (repliesElement.style.display === 'none' || repliesElement.style.display === '') {
        repliesElement.style.display = 'block';
    } else {
        repliesElement.style.display = 'none';
    }
}

function replyToPost(event, postId) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reply = {
        id: Date.now().toString(),
        author: formData.get('author'),
        content: formData.get('content'),
        timestamp: new Date().toISOString()
    };

    const posts = getPostsFromLocalStorage();
    const post = posts.find(p => p.id === postId);
    post.replies.push(reply);
    savePostsToLocalStorage(posts);
    loadPosts();
}

function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

function savePostsToLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}
