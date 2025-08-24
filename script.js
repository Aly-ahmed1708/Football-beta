// ===== FOOTBALL WEBSITE JS =====

// Handle navigation with data attributes
document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll("[data-link]");
  
    navButtons.forEach(button => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-link");
        if (target) window.location.href = target;
      });
    });
  
    // Dark/Light mode toggle
    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
  
        // Save preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "dark");
          toggleBtn.innerText = "☀ Light Mode";
        } else {
          localStorage.setItem("theme", "light");
          toggleBtn.innerText = "🌙 Dark Mode";
        }
      });
  
      // Load saved theme
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.innerText = "☀ Light Mode";
      }
    }
  });
  
  // ===== CLUB SEARCH FUNCTION =====
  function searchClubs() {
    let input = document.getElementById("clubSearch").value.toLowerCase();
    let cards = document.querySelectorAll(".club-card");
  
    cards.forEach(card => {
      let name = card.querySelector("h2").innerText.toLowerCase();
      card.style.display = name.includes(input) ? "block" : "none";
    });
  }
  