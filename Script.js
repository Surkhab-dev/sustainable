window.onload = function () {
    const carousel = document.querySelector('.carousel');
    const slides = Array.from(document.getElementsByClassName('carousel-item'));
    const totalSlides = slides.length;
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // Clone the first slide and append it to the end for infinite looping
    const firstSlideClone = slides[0].cloneNode(true);
    carousel.appendChild(firstSlideClone);

    // Set the carousel width to accommodate all slides including the clone
    carousel.style.width = `${slideWidth * (totalSlides + 1)}px`;

    function moveToNextSlide() {
        currentIndex++;
        carousel.style.transition = 'transform 0.3s ease-out';
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        if (currentIndex === totalSlides) {
            // When reaching the cloned slide, reset to the first slide instantly
            setTimeout(() => {
                carousel.style.transition = 'none'; // Disable transition
                carousel.style.transform = `translateX(0)`;
                currentIndex = 0;

                // Force reflow to reset transition
                carousel.offsetHeight; // Trigger a reflow to reset CSS transition

                // Log reset
                console.log('Reset to start');
            }, 300); // Match the duration of the transition
        }
    }

    setInterval(moveToNextSlide, 7000);

    // Initial positioning
    carousel.style.transform = `translateX(0)`;
};



document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function() {
        var content = this.querySelector('.dropdown-content');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const tipButton = document.getElementById("tipButton");
    const tipContent = document.getElementById("tipContent");
    const tipText = document.getElementById("tipText");

    const tips = [
        "Use energy-efficient appliances to reduce your carbon footprint.",
        "Take shorter showers to conserve water.",
        "Unplug electronics when not in use to save energy.",
        "Use reusable bags instead of plastic ones.",
        "Recycle paper, plastic, glass, and metal.",
        "Compost food scraps to reduce landfill waste.",
        "Use public transportation, bike, or walk instead of driving.",
        "Install solar panels to use renewable energy.",
        "Plant trees to improve air quality and reduce CO2.",
        "Support local farmers by buying local produce.",
        "Reduce meat consumption to lower your carbon footprint.",
        "Use a reusable water bottle to cut down on plastic waste.",
        "Set your thermostat a few degrees lower in winter and higher in summer.",
        "Wash clothes in cold water to save energy.",
        "Air-dry clothes instead of using a dryer.",
        "Choose energy-efficient light bulbs.",
        "Fix leaky faucets to conserve water.",
        "Use natural cleaning products instead of chemical ones.",
        "Opt for digital receipts instead of paper ones.",
        "Participate in community clean-up events.",
        "Carpool with coworkers or friends to reduce emissions.",
        "Use a programmable thermostat to optimize energy use.",
        "Donate unused items instead of throwing them away.",
        "Buy products with minimal packaging.",
        "Grow your own vegetables and herbs.",
        "Turn off lights when you leave a room.",
        "Avoid single-use plastics whenever possible.",
        "Use rechargeable batteries.",
        "Install low-flow showerheads and faucets.",
        "Support companies with sustainable practices.",
        "Educate others about the importance of sustainability."
    ];

    // Display a welcome message when the page loads
    tipContent.style.display = "block";
    tipText.textContent = "Welcome! Click the icon for a sustainable tip!";
    setTimeout(() => {
        tipContent.style.display = "none";
    }, 5000); // Hide after 5 seconds

    tipButton.addEventListener("click", function() {
        if (tipContent.style.display === "none" || tipContent.style.display === "") {
            showRandomTip();
            tipContent.style.display = "block";
        } else {
            tipContent.style.display = "none";
        }
    });

    function showRandomTip() {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipText.textContent = tips[randomIndex];
    }
});
