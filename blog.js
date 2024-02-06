function toggleLike(blogId) {
    const likeButton = document.getElementById(`like-button-${blogId}`);
    const likeCounter = document.getElementById(`like-counter-${blogId}`);
    
    let isLiked = JSON.parse(localStorage.getItem(`isLiked-${blogId}`)) || false;

    if (!isLiked) {
        
        let likes = parseInt(localStorage.getItem(`likes-${blogId}`)) || 0;
        likes++;
        likeCounter.textContent = `Likes: ${likes}`;
        localStorage.setItem(`likes-${blogId}`, likes);
        likeButton.textContent = 'Unlike';
    } else {
        
        let likes = parseInt(localStorage.getItem(`likes-${blogId}`)) || 0;
        likes--;
        likeCounter.textContent = `Likes: ${likes}`;
        localStorage.setItem(`likes-${blogId}`, likes);
        likeButton.textContent = 'Like';
    }

   
    isLiked = !isLiked;
    localStorage.setItem(`isLiked-${blogId}`, isLiked);

    
    likeButton.classList.add('animated');

    
    setTimeout(() => {
        likeButton.classList.remove('animated');
    }, 500);
}

function addComment(blogId) {
    const commentsSection = document.getElementById(`comments-section-${blogId}`);
    const commentInput = commentsSection.querySelector('textarea');
    const comment = commentInput.value.trim();

    if (comment !== '') {
        commentsSection.innerHTML += `<p>${comment}</p>`;
        commentInput.value = '';
        localStorage.setItem(`comments-${blogId}`, commentsSection.innerHTML);
    }
}

function clearComments(blogId) {
    const commentsSection = document.getElementById(`comments-section-${blogId}`);
    commentsSection.innerHTML = '';
    localStorage.removeItem(`comments-${blogId}`);
}

function retrieveSavedData(blogId) {
    const likeCounter = document.getElementById(`like-counter-${blogId}`);
    const likeButton = document.getElementById(`like-button-${blogId}`);
    const commentsSection = document.getElementById(`comments-section-${blogId}`);
    
    const likes = parseInt(localStorage.getItem(`likes-${blogId}`)) || 0;
    likeCounter.textContent = `Likes: ${likes}`;

    const isLiked = JSON.parse(localStorage.getItem(`isLiked-${blogId}`)) || false;
    likeButton.textContent = isLiked ? 'Unlike' : 'Like';

    const savedComments = localStorage.getItem(`comments-${blogId}`);
    if (savedComments) {
        commentsSection.innerHTML = savedComments;
    }
}

retrieveSavedData(1);
retrieveSavedData(2);
