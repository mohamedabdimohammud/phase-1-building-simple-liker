// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Select the error modal and hide it by default
const modal = document.getElementById('modal');
modal.classList.add('hidden');

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('.like');

likeButtons.forEach(button => {
  button.addEventListener('click', handleLike);
});

function handleLike(event) {
  const button = event.target;
  mimicServerCall()
    .then(() => {
      if (button.innerText === EMPTY_HEART) {
        button.innerText = FULL_HEART;
        button.classList.add('activated-heart');
      } else {
        button.innerText = EMPTY_HEART;
        button.classList.remove('activated-heart');
      }
    })
    .catch(error => {
      const modalMessage = document.getElementById('modal-message');
      modalMessage.innerText = error;
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
