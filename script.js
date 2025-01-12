const countdown = () => {
  const targetDate = new Date("june 3, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference < 0) {
    clearInterval(timer);
    document.getElementById("message").innerHTML = "Your friend is finally here!";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("time-left").innerText = 
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
};

const timer = setInterval(countdown, 1000);
countdown();
