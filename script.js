/* script.js */
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Weak validation (potential vulnerability)
    if (username === '' || password === '') {
      alert('Please fill in all fields.');
      event.preventDefault();
    }
  });
  
  document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = document.getElementById('comment').value;
    const commentsSection = document.getElementById('commentsSection');
  
    // Directly inserting without sanitization (Potential XSS)
    commentsSection.innerHTML += `<p>${comment}</p>`;
    document.getElementById('comment').value = '';
  });
  