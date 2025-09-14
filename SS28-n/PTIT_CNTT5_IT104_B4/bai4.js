function displayNumbers(callback, delay) {
  if (typeof callback !== "function") throw new Error("callback phải là hàm");
  if (typeof delay !== "number" || delay <= 0) throw new Error("delay phải là số dương");
  let n = 1;
  const timer = setInterval(() => callback(n++), delay);
  return () => clearInterval(timer);
}

function show(n) {
  console.log(`Số thứ tự: ${n}`);
}

let stopHandle = null;

document.getElementById("start").addEventListener("click", () => {
  if (!stopHandle) stopHandle = displayNumbers(show, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  if (stopHandle) {
    stopHandle();
    stopHandle = null;
  }
});
