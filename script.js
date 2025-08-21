document.addEventListener("DOMContentLoaded", () => {
  // Handle like button clicks
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("You liked this post!");
    });
  });

  // Handle comment button clicks
  const commentButtons = document.querySelectorAll(".comment-btn");

  commentButtons.forEach(button => {
    button.addEventListener("click", () => {
      let comment = prompt("Write your comment:");
      if (comment) {
        alert("You commented: " + comment);
      }
    });
  });

  // Handle friends message buttons
  const messageButtons = document.querySelectorAll("button");

  messageButtons.forEach(button => {
    if (button.textContent === "Message") {
      button.addEventListener("click", () => {
        alert("Messaging feature coming soon!");
      });
    }
  });
});