document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("info-box");
    const infoContent = document.getElementById("info-content");

    function updateContent(title, text, imageSrc, bgColor) {
        infoContent.innerHTML = `<h2>${title}</h2>
            <p>${text}</p>
            <img src="${imageSrc}" alt="${title}" />`;
        infoBox.style.backgroundColor = bgColor;
    }

    updateContent(
        "Introduction",
        "Roman Syria, created in 64 BCE, was an important part of the Roman Empire. It became a center for trade, culture, and military power in the eastern Mediterranean.",
        "th.jpeg",
        "darkred"
    );

    document.getElementById("intro-btn").addEventListener("click", () => {
        updateContent(
            "Introduction",
            "Roman Syria, created in 64 BCE, was an important part of the Roman Empire. It became a center for trade, culture, and military power in the eastern Mediterranean.",
            "th.jpeg",
            "darkred"
        );
    });

    document.getElementById("period1-btn").addEventListener("click", () => {
        updateContent(
            "64 BCE: Roman Annexation",
            "In 64 BCE, General Pompey made Syria part of the Roman Republic after defeating the Seleucid Empire. This helped Rome control the eastern Mediterranean.",
            "th.jpeg",
            "darkred"
        );
    });

    document.getElementById("period2-btn").addEventListener("click", () => {
        updateContent(
            "Golden Age: 1st-3rd Century CE",
            "From the 1st to the 3rd centuries, Syria enjoyed a golden age. Cities like Antioch became rich and famous for trade, culture, and art, blending Roman and local traditions.",
            "engraving-Antioch-Seleucid-palace-Louis-Francois-Cassas-Credit-public-domain.jpeg",
            "darkred"
        );
    });

    document.getElementById("period3-btn").addEventListener("click", () => {
        updateContent(
            "3rd Century Decline",
            "In the 3rd century, Syria faced troubles like invasions and political problems in Rome. Still, it stayed important because of its location.",
            "1eea8dbd43139d84141dd6d45458c897.jpg",
            "darkred"
        );
    });
});
