const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');


const createComment = (data) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  comment.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};

const createComments = (comments) => {
  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentsList.append(fragment);
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

function OnEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const createBigPictureDetails = (data) => {
  bigPicture.querySelector('.big-picture__img img').src = data.url;
  bigPicture.querySelector('.big-picture__img img').alt = '';
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsList.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', OnEscKeyDown);

  createBigPictureDetails(data);
  createComments(data.comments);
};

cancelButton.addEventListener('click', hideBigPicture);

export {showBigPicture};
