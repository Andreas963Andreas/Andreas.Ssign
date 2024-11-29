document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("info-box");
    const infoContent = document.getElementById("info-content");

    const content = {
        intro: {
            html: `
                <h2>Introduction</h2>
                <p>Roman Syria, created in 64 BCE, was an important part of the Roman Empire. It became a center for trade, culture, and military power in the eastern Mediterranean.</p>
                <img src="th.jpeg" alt="Map of Roman Syria" />
            `,
            color: "darkred"
        },
        period1: {
            html: `
                <h2>64 BCE: Roman Annexation</h2>
                <p>In 64 BCE, General Pompey made Syria part of the Roman Republic after defeating the Seleucid Empire. This helped Rome control the eastern Mediterranean.</p>
                <img src="th.jpeg" alt="Roman Annexation" />
            `,
            color: "darkred"
        },
        period2: {
            html: `
                <h2>Golden Age: 1st-3rd Century CE</h2>
                <p>From the 1st to the 3rd centuries, Syria enjoyed a golden age. Cities like Antioch became rich and famous for trade, culture, and art, blending Roman and local traditions.</p>
                <img src="engraving-Antioch-Seleucid-palace-Louis-Francois-Cassas-Credit-public-domain.jpeg" alt="Antioch in Decline" />
            `,
            color: "darkred"
        },
        period3: {
            html: `
                <h2>3rd Century Decline</h2>
                <p>In the 3rd century, Syria faced troubles like invasions and political problems in Rome. Still, it stayed important because of its location.</p>
                <img src="1eea8dbd43139d84141dd6d45458c897.jpg" alt="Antioch City" />
            `,
            color: "darkred"
        }
    };

    // Function to update content and background
    function updateContent(key) {
        infoContent.innerHTML = content[key].html; // Update content
        infoBox.style.backgroundColor = content[key].color; // Update background color
    }

    // Function to clear content and retain background
    function clearContent() {
        infoContent.innerHTML = ""; // Clear all content
        infoBox.style.backgroundColor = "#f9f5f0"; // Set to default background color
    }

    // Default content on page load
    updateContent("intro");

    // Add event listeners for buttons
    document.getElementById("intro-btn").addEventListener("click", () => updateContent("intro"));
    document.getElementById("period1-btn").addEventListener("click", () => updateContent("period1"));
    document.getElementById("period2-btn").addEventListener("click", () => updateContent("period2"));
    document.getElementById("period3-btn").addEventListener("click", () => updateContent("period3"));
    document.getElementById("clear-btn").addEventListener("click", clearContent); // Event for "X" button
});
