var timeElement = document.getElementById('time');

function updateTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    // Add leading zeros if minutes is less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var currentTime = hours + ":" + minutes;
    timeElement.innerHTML = currentTime;
}

// Call updateTime function to update time initially
updateTime();

// Update time every second (1000 milliseconds)
setInterval(updateTime, 1000);

document.querySelector('.numbers').addEventListener('click', function(event) {
  if (event.target.classList.contains('number-btn')) {
      calculateNumbers(event.target.innerText);
  }
});

document.querySelector('.clear-btn').addEventListener('click', clearDisplay);

document.querySelector('.percentage-btn').addEventListener('click', function() {
  percentage(document.querySelector('.area').value);
});

document.querySelector('.negative-btn').addEventListener('click', function() {
  makeNegative(document.querySelector('.area').value);
});
function calculateNumbers(result) {
  document.querySelector('.area').value += result;
}

function clearDisplay() {
  var currentDisplay = document.querySelector('.area').value;
    if (currentDisplay.length > 0) {
        // Remove the last character from the display
        document.querySelector('.area').value = currentDisplay.slice(0, -1);
    }
}

function percentage(result) {
  var result1 = String(result);
  if (result1.includes("%")) {
      var a, b, percent;
      var splitWord = [];
      a = Number(splitWord[0]);
      b = Number(splitWord[1]);
      percent = (a / 100 * b);
      document.querySelector('.area').value = percent;
  }
}

function makeNegative(result) {
  if (result.charAt(0) == '_') {
      document.querySelector('.area').value = result.replace('-', '');
  } else {
      document.querySelector('.area').value = '-' + result;
  }
}
