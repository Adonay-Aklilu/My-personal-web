// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Validation
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Please fill out all fields.");
  } else {
    alert("Form submitted successfully!");
  }
});
// Responsive Navigation
function openNav() {
  document.getElementById("navbar").style.width = "250px";
}

function closeNav() {
  document.getElementById("navbar").style.width = "0";
}

// Animated Skills Progress Bar
$(document).ready(function(){
  $('.skill-progress').each(function(){
    var progressBar = $(this),
    progressValue = progressBar.find('.progress-value');

    progressBar.appear({ force_process: true });
    progressBar.on('appear', function(){
      var progress = $(this).data('progress');
      progressValue.animate({
        width: progress + '%'
      }, 1000, function(){
        progressValue.html(progress + '%');
      });
    });
  });
});

// Modal Window
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
