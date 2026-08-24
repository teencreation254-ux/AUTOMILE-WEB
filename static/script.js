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
function openSolution(solution) {

    const modal = document.getElementById("solutionModal");
    const title = document.getElementById("solutionTitle");
    const description = document.getElementById("solutionDescription");
    const details = document.getElementById("solutionDetails");

    const solutions = {

        tracking: {
            title: "Vehicle Tracking",
            description: "Know where your vehicles are, wherever they are.",
            details: `
                <ul>
                    <li>Real-time vehicle location</li>
                    <li>Live vehicle movement</li>
                    <li>Trip history and route playback</li>
                    <li>Vehicle status monitoring</li>
                    <li>Geofencing and location alerts</li>
                    <li>Driver and vehicle activity monitoring</li>
                </ul>
            `
        },

        fleet: {
            title: "Fleet Management",
            description: "Take complete control of your fleet from one platform.",
            details: `
                <ul>
                    <li>Centralized fleet monitoring</li>
                    <li>Vehicle activity reports</li>
                    <li>Driver performance monitoring</li>
                    <li>Fleet utilization reports</li>
                    <li>Maintenance management</li>
                    <li>Fleet activity history</li>
                </ul>
            `
        },

        fuel: {
            title: "Fuel Monitoring",
            description: "Improve fuel accountability and reduce unnecessary losses.",
            details: `
                <ul>
                    <li>Monitor fuel levels</li>
                    <li>Detect unusual fuel consumption</li>
                    <li>Identify possible fuel theft</li>
                    <li>Fuel usage reports</li>
                    <li>Fuel consumption analysis</li>
                    <li>Improve fuel accountability</li>
                </ul>
            `
        },

        camera: {
            title: "Dash Cameras",
            description: "Capture what happens on the road and protect every journey.",
            details: `
                <ul>
                    <li>Front and rear video recording</li>
                    <li>Live video monitoring</li>
                    <li>Driver and road visibility</li>
                    <li>Incident recording</li>
                    <li>Video evidence when needed</li>
                    <li>Improved driver accountability</li>
                </ul>
            `
        },

        speed: {
            title: "Speed Limiters",
            description: "Promote safer driving and better control of vehicle speeds.",
            details: `
                <ul>
                    <li>Control maximum vehicle speed</li>
                    <li>Improve road safety</li>
                    <li>Reduce excessive speeding</li>
                    <li>Monitor speed activity</li>
                    <li>Support responsible driving</li>
                    <li>Improve fleet compliance</li>
                </ul>
            `
        },

        asset: {
            title: "Asset Tracking",
            description: "Keep track of valuable equipment and assets wherever they go.",
            details: `
                <ul>
                    <li>Real-time asset location</li>
                    <li>Asset movement monitoring</li>
                    <li>Location history</li>
                    <li>Geofence alerts</li>
                    <li>Asset security monitoring</li>
                    <li>Improve asset accountability</li>
                </ul>
            `
        }

    };

    const selected = solutions[solution];

    title.textContent = selected.title;
    description.textContent = selected.description;
    details.innerHTML = selected.details;

    modal.classList.add("active");
}


function closeSolution() {

    const modal = document.getElementById("solutionModal");

    modal.classList.remove("active");

}


// Close popup when clicking outside it

document.addEventListener("click", function(event) {

    const modal = document.getElementById("solutionModal");

    if (event.target === modal) {
        closeSolution();
    }

});
/* =========================================================
   AUTOMILE — PREMIUM PAYMENT INTERACTIONS
========================================================= */

function copyPaymentDetail(value, button) {

    if (!navigator.clipboard) {
        fallbackCopyPaymentDetail(value, button);
        return;
    }

    navigator.clipboard.writeText(value)
        .then(() => {

            showCopySuccess(button);

        })
        .catch(() => {

            fallbackCopyPaymentDetail(value, button);

        });
}


/* =========================
   FALLBACK COPY METHOD
========================= */

function fallbackCopyPaymentDetail(value, button) {

    const textArea = document.createElement("textarea");

    textArea.value = value;

    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";

    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    try {

        document.execCommand("copy");

        showCopySuccess(button);

    } catch (error) {

        console.error("Unable to copy payment detail:", error);

    }

    document.body.removeChild(textArea);
}


/* =========================
   COPY SUCCESS FEEDBACK
========================= */

function showCopySuccess(button) {

    if (!button) return;

    const originalHTML = button.innerHTML;

    button.innerHTML =
        '<i class="fas fa-check"></i><span>Copied</span>';

    button.classList.add("copied");

    button.style.pointerEvents = "none";

    setTimeout(() => {

        button.innerHTML = originalHTML;

        button.classList.remove("copied");

        button.style.pointerEvents = "";

    }, 1800);
}


/* =========================
   PAYMENT CARD REVEAL
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const paymentCards =
        document.querySelectorAll(".payment-card");

    if (!paymentCards.length) return;

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "payment-visible"
                        );

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    paymentCards.forEach(card => {

        card.classList.add("payment-hidden");

        observer.observe(card);

    });
    /* =========================================================
   AUTOMILE CINEMATIC SOLUTIONS
   FINAL 6-SCENE SCROLL ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelector(".cinematic-solutions");

    const scenes = document.querySelectorAll(
        ".cinematic-solutions .cinematic-scene"
    );

    if (!section) {
        console.log("Cinematic section NOT found.");
        return;
    }

    if (scenes.length === 0) {
        console.log("No cinematic scenes found.");
        return;
    }

    console.log("Cinematic scenes found:", scenes.length);


    function showScene(index) {

        scenes.forEach(function (scene, i) {

            if (i === index) {

                scene.classList.add("active");

            } else {

                scene.classList.remove("active");

            }

        });

        console.log("Showing scene:", index + 1);

    }


    function updateScenes() {

        const rect = section.getBoundingClientRect();

        const totalScroll =
            section.offsetHeight - window.innerHeight;


        if (totalScroll <= 0) {
            showScene(0);
            return;
        }


        const distanceScrolled = -rect.top;


        let progress =
            distanceScrolled / totalScroll;


        progress = Math.max(
            0,
            Math.min(1, progress)
        );


        let index =
            Math.floor(progress * scenes.length);


        if (index >= scenes.length) {
            index = scenes.length - 1;
        }


        showScene(index);

    }


    /* Start with scene 1 */

    showScene(0);


    /* Listen for scrolling */

    window.addEventListener(
        "scroll",
        updateScenes,
        { passive: true }
    );


    /* Recalculate if window size changes */

    window.addEventListener(
        "resize",
        updateScenes
    );


    updateScenes();

});
