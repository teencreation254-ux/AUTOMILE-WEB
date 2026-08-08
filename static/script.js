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
// ==========================================
// AUTO MILE - SOLUTION DETAILS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const solutionDetails = {
        "Vehicle Tracking": {
            title: "Vehicle Tracking",
            text: "Monitor your vehicles in real time from anywhere.",
            details: [
                "Live vehicle location tracking",
                "Real-time movement monitoring",
                "Trip and route history",
                "Vehicle status monitoring",
                "Geofencing and location alerts",
                "Easy fleet visibility from one platform"
            ]
        },

        "Fleet Management": {
            title: "Fleet Management",
            text: "Manage your fleet with powerful reporting and live monitoring.",
            details: [
                "Monitor your entire fleet from one platform",
                "Track vehicle activity and performance",
                "Driver and vehicle management",
                "Detailed fleet reports",
                "Trip and mileage monitoring",
                "Improve fleet efficiency and accountability"
            ]
        },

        "Fuel Monitoring": {
            title: "Fuel Monitoring",
            text: "Reduce fuel losses and improve accountability.",
            details: [
                "Monitor fuel levels",
                "Identify unusual fuel consumption",
                "Detect possible fuel theft",
                "Track fuel usage",
                "Improve fuel accountability",
                "Reduce unnecessary fuel costs"
            ]
        },

        "Dash Cameras": {
            title: "Dash Cameras",
            text: "Protect every journey with smart video surveillance.",
            details: [
                "Record journeys while vehicles are on the road",
                "Improve driver accountability",
                "Capture important incidents",
                "Enhance vehicle security",
                "Review recorded footage when needed",
                "Support safer driving practices"
            ]
        },

        "Speed Limiters": {
            title: "Speed Limiters",
            text: "Improve driver safety and remain compliant.",
            details: [
                "Control vehicle maximum speed",
                "Promote safer driving",
                "Reduce speeding incidents",
                "Improve driver discipline",
                "Protect vehicles and passengers",
                "Support fleet safety policies"
            ]
        },

        "Asset Tracking": {
            title: "Asset Tracking",
            text: "Track valuable assets anytime, anywhere.",
            details: [
                "Track valuable equipment and assets",
                "Monitor asset locations",
                "Improve asset security",
                "Receive movement alerts",
                "Reduce the risk of asset loss",
                "Know where your assets are at all times"
            ]
        }
    };


    // Create the popup
    const modal = document.createElement("div");
    modal.className = "solution-modal";

    modal.innerHTML = `
        <div class="solution-modal-content">

            <button class="solution-close">&times;</button>

            <div class="solution-modal-icon">
                <i class="fas fa-location-dot"></i>
            </div>

            <h2 id="solution-modal-title"></h2>

            <p id="solution-modal-text"></p>

            <div class="solution-details">
                <h3>What you get</h3>
                <ul id="solution-modal-list"></ul>
            </div>

        </div>
    `;

    document.body.appendChild(modal);


    // Select all solution cards
    const solutionCards = document.querySelectorAll(".fleet-card");


    solutionCards.forEach(function (card) {

        card.style.cursor = "pointer";

        card.addEventListener("click", function () {

            const titleElement = card.querySelector("h3");

            if (!titleElement) return;

            const title = titleElement.textContent.trim();

            const solution = solutionDetails[title];

            if (!solution) return;


            document.getElementById("solution-modal-title").textContent =
                solution.title;

            document.getElementById("solution-modal-text").textContent =
                solution.text;


            const list = document.getElementById("solution-modal-list");

            list.innerHTML = "";


            solution.details.forEach(function (detail) {

                const li = document.createElement("li");

                li.innerHTML = `
                    <span>✓</span>
                    ${detail}
                `;

                list.appendChild(li);

            });


            modal.classList.add("active");

        });

    });


    // Close button
    modal.querySelector(".solution-close").addEventListener("click", function () {

        modal.classList.remove("active");

    });


    // Close when clicking outside
    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    });

});