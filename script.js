let score = 0;


function clickCharacter() {
  // Increment the score when the character is clicked
  score++;
  document.getElementById('score').textContent = score;
}