document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var score = 0;
  
  // Check answers
  if (document.querySelector('input[name="q1"]:checked').id === 'a') {
    score++;
  }
  if (document.querySelector('input[name="q2"]:checked').id === 'b2') {
    score++;
  }
  if (document.querySelector('input[name="q3"]:checked').id === 'a3') {
    score++;
  }
  if (document.querySelector('input[name="q4"]:checked').id === 'c4') {
      score++;
    }
    if (document.querySelector('input[name="q5"]:checked').id === 'b5') {
      score++;
    }
  
  // Display score
  alert('You scored ' + score + ' out of 5!');
  
  // Reset form
  document.getElementById('quizForm').reset();
});