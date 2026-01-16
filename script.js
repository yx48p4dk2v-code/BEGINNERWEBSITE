const scrollElements = document.querySelectorAll('.scroll');

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

scrollElements.forEach(el => scrollObserver.observe(el));

// Smooth page change
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location = link.href;
    }, 300);
  });
});

const popup = document.getElementById("privacyPopup");
const agreeBtn = document.getElementById("agreeBtn");
const declineBtn = document.getElementById("declineBtn");

// Show popup only if not accepted
window.addEventListener("load", () => {
    if (!localStorage.getItem("privacyAccepted")) {
        popup.classList.add("show");
    }
});

// Agree
agreeBtn.addEventListener("click", () => {
    localStorage.setItem("privacyAccepted", "yes");
    popup.classList.remove("show");
});

// Decline
declineBtn.addEventListener("click", () => {
    alert("You must accept the Privacy Policy to use this website.");
});

