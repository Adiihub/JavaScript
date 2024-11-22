// Generate the random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId; 

function StartChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 500);
  }
}

function StopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById("Start").addEventListener("click", StartChangingColor);
document.getElementById("Stop").addEventListener("click", StopChangingColor);
