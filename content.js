// Function to add a dislike button to each LinkedIn post
function addDislikeButtons() {
    // Select LinkedIn posts (using a broad selector)
    const posts = document.querySelectorAll("[data-urn]");
  
    posts.forEach(post => {
      // Check if a dislike button already exists
      if (!post.querySelector(".dislike-button")) {
        // Create a container to hold the dislike button
        const buttonContainer = document.createElement("div");
        buttonContainer.style.textAlign = "center"; // Center the button
        buttonContainer.style.marginTop = "10px"; // Add some space above
  
        // Create the dislike button element
        const dislikeButton = document.createElement("button");
        dislikeButton.innerText = "Dislike";
        dislikeButton.classList.add("dislike-button");
  
        // Add styling to the button
        dislikeButton.style.backgroundColor = "#fff"; // White background
        dislikeButton.style.color = "#000"; // Black text
        dislikeButton.style.border = "1px solid #ccc"; // Light gray border
        dislikeButton.style.padding = "8px 16px"; // Padding for button
        dislikeButton.style.cursor = "pointer"; // Pointer cursor on hover
        dislikeButton.style.margin = "10px 0"; // Add vertical space
  
        // Add a click event to change button color to red
        dislikeButton.addEventListener("click", () => {
          dislikeButton.style.backgroundColor = "#ff4c4c"; // Red background
          dislikeButton.style.color = "#fff"; // White text
        });
  
        // Append the button to the container, and the container to the post
        buttonContainer.appendChild(dislikeButton);
        post.appendChild(buttonContainer);
      }
    });
  }
  
  // Initial call to add dislike buttons
  addDislikeButtons();
  
  // Observe the page for dynamically loaded posts
  const observer = new MutationObserver(addDislikeButtons);
  observer.observe(document.body, { childList: true, subtree: true });
  