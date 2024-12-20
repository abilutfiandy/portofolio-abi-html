// daftar text yang akan berganti pada css typing-effect
const texts = [
  "Frontend Developer",
  "Backend Developer",
  "Let’s build success together!",
];

let currentTextIndex = 0;

// fungsi untuk mengganti teks dengan efek mengetik pada css typing

function typeText() {
  const typingElement = document.getElementById("typingText");
  typingElement.textContent = "";

  const text = texts[currentTextIndex];
  let i = 0;

  // mengetik efek
  const interval = setInterval(() => {
    typingElement.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        typeText();
      }, 1000);
    }
  }, 100);
}

typeText(); //mulai efek mengetik
