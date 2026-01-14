let progress1= localStorage.getItem("progress1") || 0;
let progress2= localStorage.getItem("progress2") || 0;
let progress3= localStorage.getItem("progress3") || 0;

function openCourse1() {
  window.location.href = "FullStack Course.html";
}

function openCourse2() {
  window.location.href = "DataStructure Course.html";
}

function openCourse3() {
  window.location.href = "Python Course.html";
}

function markCompleted1() {
  progress1 = Math.min(100, Number(progress1) + 20);
  if(Number(progress1)==100){
    progress1=Number(80);
  }
  localStorage.setItem("progress1", progress1);
  alert("Course Completed!");
}

document.addEventListener("DOMContentLoaded", () => {
  const fill = document.getElementById("progress-fill1");
  const text = document.getElementById("progress-text1");

  if (fill && text) {
    fill.style.width = progress1 + "%";
    text.textContent = progress1 + "%";
  }
});

function markCompleted2() {
  progress2 = Math.min(100, Number(progress2) + 20);
  if(Number(progress2)==100){
    progress2=Number(80);
  }
  localStorage.setItem("progress2", progress2);
  alert("Course Completed!");
}

document.addEventListener("DOMContentLoaded", () => {
  const fill = document.getElementById("progress-fill2");
  const text = document.getElementById("progress-text2");

  if (fill && text) {
    fill.style.width = progress2 + "%";
    text.textContent = progress2 + "%";
  }
});
function markCompleted3() {
  progress3 = Math.min(100, Number(progress3) + 20);
  if(Number(progress3)==100){
    progress3=Number(80);
  }
  localStorage.setItem("progress3", progress3);
  alert("Course Completed!");
}

document.addEventListener("DOMContentLoaded", () => {
  const fill = document.getElementById("progress-fill3");
  const text = document.getElementById("progress-text3");

  if (fill && text) {
    fill.style.width = progress3 + "%";
    text.textContent = progress3 + "%";
  }
});