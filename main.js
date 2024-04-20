var typed = new typed(".text" ,{
    Strings:["Frontend Developer" , "Youtuber" , "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Validate form fields
    if (name === '') {
      showError('name', 'Name is required');
    } else {
      hideError('name');
    }
  
    if (email === '') {
      showError('email', 'Email is required');
    } else if (!isValidEmail(email)) {
      showError('email', 'Invalid email format');
    } else {
      hideError('email');
    }
  
    if (password === '') {
      showError('password', 'Password is required');
    } else {
      hideError('password');
    }
  
    // If all fields are valid, submit the form
    if (name !== '' && email !== '' && isValidEmail(email) && password !== '') {
      alert('Form submitted successfully!');
      // You can add code here to submit the form to the server
    }
  });
  
  // Function to display error message
  function showError(field, message) {
    const errorElement = document.getElementById(`${field}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  }
  
  // Function to hide error message
  function hideError(field) {
    const errorElement = document.getElementById(`${field}-error`);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  }
  
  // Function to validate email format
  function isValidEmail(email) {
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Define language mappings
const languages = {
    en: {
      heading: 'I am a first year Undergraduate at Amrita Vishwa Vidyapeetham in Computer Science Engineering. I am 19. Unlike other portfolios, I do not have any titles, YET ! I everyday learn a new aspect of CSE like this portfolio that I have made from scratch. Apart from being an active learner, I also indulge in various co-curricular activites like MUNing, Hackathons etc.',
      
    },
    fr: {
      heading: 'Je suis étudiant en première année de premier cycle à Amrita Vishwa Vidyapeetham en génie informatique. Jai 19 ans Contrairement à dautres portfolios, je nai pas encore de titres ! Japprends chaque jour un nouvel aspect du CSE comme celui-ci portfolio que jai créé à partir de zéro. En plus dêtre un apprenant actif, je madonne également à diverses activitésactivités parascolaires comme MUNing, Hackathons, etc.'
      
    }
    // Add more language mappings as needed
  };
  
  // Function to change language
  function changeLanguage(language) {
    const selectedLanguage = languages[language];
    if (selectedLanguage) {
      document.getElementById('heading').textContent = selectedLanguage.heading;
      document.getElementById('content').textContent = selectedLanguage.content;
    }
  }
  
  // Event listener for language select change
  document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
  });
  
  // Initial language setup (English by default)
  changeLanguage('en');

  function toggleInfo() {
    const infoDiv = document.getElementById('additional-info');
    const toggleBtn = document.getElementById('toggle-btn');
    
    if (infoDiv.style.display === 'none') {
      infoDiv.style.display = 'block';
      toggleBtn.textContent = 'Hide More';
    } else {
      infoDiv.style.display = 'none';
      toggleBtn.textContent = 'Show More';
    }
  }
  const chatInput = document.getElementById('chat-input');
  const sendButton = document.getElementById('send-btn');
  const chatMessages = document.getElementById('chat-messages');
  
  sendButton.addEventListener('click', () => {
    sendMessage();
  });
  
  chatInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message !== '') {
      const newMessage = document.createElement('p');
      newMessage.textContent = message;
      newMessage.classList.add('user-message');
      chatMessages.appendChild(newMessage);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
