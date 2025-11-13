// FAQ toggle animation
document.querySelectorAll(".faq-item h4").forEach((q) => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

// Demo form submit
const form = document.querySelector(".contact-form form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
  form.reset();
});
