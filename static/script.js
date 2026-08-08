// Fade in sections as you scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Smooth navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Button animation
document.querySelectorAll(".btn, .btn-whatsapp").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

console.log("AUTOMILE website loaded successfully.");
document.addEventListener("DOMContentLoaded", function(){

    const featureTitles = document.querySelectorAll(".feature-box h3");

    featureTitles.forEach(function(title, index){

        const originalText = title.textContent.trim();

        title.textContent = "";

        let letter = 0;

        setTimeout(function(){

            const typing = setInterval(function(){

                title.textContent += originalText.charAt(letter);

                letter++;

                if(letter >= originalText.length){
                    clearInterval(typing);
                }

            }, 70);

        }, index * 500);

    });

});
// Fleet feature title typing animation
document.addEventListener("DOMContentLoaded", function () {

    const titles = document.querySelectorAll(".feature-box h3");

    titles.forEach(function (title, index) {

        const originalText = title.textContent;
        title.textContent = "";

        let letter = 0;

        function typeTitle() {
            if (letter < originalText.length) {
                title.textContent += originalText.charAt(letter);
                letter++;
                setTimeout(typeTitle, 70);
            }
        }

        setTimeout(typeTitle, index * 700);
    });

});