var countDownDate = new Date("Oct 21, 2023 16:36:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("hidden-post").innerHTML = "You're on the right track.<br>Try again later.";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "FINAL STEPS TO TOTAL ENLIGHTENMENT:<br>7pm @ 14603 14th Ave SW, Burien, WA 98166 ";
    document.getElementById("hidden-post").innerHTML = "<img src=\"./assets/post.jpg\" alt=\"shh, it's a secret\"></img>";
  }
}, 1000);