const sectionsData = {
    currentlyReading: [
        { title: "Don't Make Me Think", image: "images/book1.png", progress: 50 },
        { title: "The Design of Everyday Things", image: "images/book2.png", progress: 30 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", progress: 75 },
        { title: "Harry Potter", image: "images/book4.png", progress: 45 },
        { title: "React Explained", image: "images/react.png", progress: 60 },
        { title: "Don't Make Me Think", image: "images/book1.png", progress: 50 },
        { title: "The Design of Everyday Things", image: "images/book2.png", progress: 30 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", progress: 75 },
        { title: "Harry Potter", image: "images/book4.png", progress: 45 },
        { title: "React Explained", image: "images/react.png", progress: 60 },
        { title: "Don't Make Me Think", image: "images/book1.png", progress: 50 },
        { title: "The Design of Everyday Things", image: "images/book2.png", progress: 30 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", progress: 75 },
        { title: "Harry Potter", image: "images/book4.png", progress: 45 },
        { title: "React Explained", image: "images/react.png", progress: 60 },
        { title: "Don't Make Me Think", image: "images/book1.png", progress: 50 },
        { title: "The Design of Everyday Things", image: "images/book2.png", progress: 30 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", progress: 75 },
        { title: "Harry Potter", image: "images/book4.png", progress: 45 },
        { title: "React Explained", image: "images/react.png", progress: 60 },
        
    ],
    toRead: [
        { title: "Don't Make Me Think", image: "images/book1.png", rating: 4.5 },
        { title: "The Design of Everyday Things", image: "images/book2.png", rating: 4.0 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", rating: 4.8 },
        { title: "Harry Potter", image: "images/book4.png", rating: 4.2 },
        { title: "React Explained", image: "images/react.png", rating: 4.7 },
        { title: "Don't Make Me Think", image: "images/book1.png", rating: 4.5 },
        { title: "The Design of Everyday Things", image: "images/book2.png", rating: 4.0 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", rating: 4.8 },
        { title: "Harry Potter", image: "images/book4.png", rating: 4.2 },
        { title: "React Explained", image: "images/react.png", rating: 4.7 }
    ],
    
    finished: [
        { title: "Don't Make Me Think", image: "images/book1.png", progress: 100 },
        { title: "The Design of Everyday Things", image: "images/book2.png", progress: 100 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", progress: 100 },
        { title: "Harry Potter", image: "images/book4.png", progress: 100 },
        { title: "React Explained", image: "images/react.png", progress: 100 },
        { title: "Don't Make Me Think", image: "images/book1.png", progress: 100 },
        { title: "The Design of Everyday Things", image: "images/book2.png", progress: 100 },
        { title: "Thinking, Fast and Slow", image: "images/book3.png", progress: 100 },
        { title: "Harry Potter", image: "images/book4.png", progress: 100 },
        { title: "React Explained", image: "images/react.png", progress: 100 }
    ]
};

function createBookCard(book, buttonText, sectionType) {
    const card = document.createElement('div');
    card.className = 'bg-white w-52 p-4 rounded-lg shadow-lg flex-shrink-0 text-center';

    // Determine content based on section type
    let extraContent;
    if (sectionType === 'toRead') {
        // Display rating for toRead section
        extraContent = `<p class="text-yellow-500 font-semibold mb-2">Rating: ${book.rating} ★</p>`;
    } else {
        // Display progress bar for currentlyReading and finished sections
        extraContent = `
            <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div class="bg-green-700 h-2 rounded-full" style="width: ${book.progress}%;"></div>
            </div>
        `;
    }

    card.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="w-full h-56 object-cover rounded-md mb-2">
        <h3 class="font-semibold text-sm mb-2">${book.title}</h3>
        ${extraContent}
        <button class="bg-green-700 text-white py-1 px-4 rounded-md text-sm hover:bg-green-800 transition duration-200">${buttonText}</button>
    `;
    return card;
}

function populateSlider(sliderId, books, buttonText, sectionType) {
    const slider = document.getElementById(sliderId);
    slider.innerHTML = ''; // Clear previous content
    books.forEach(book => slider.appendChild(createBookCard(book, buttonText, sectionType)));
}

populateSlider("currentlyReadingSlider", sectionsData.currentlyReading, 'Continue', 'currentlyReading');
populateSlider("toReadSlider", sectionsData.toRead, 'Read', 'toRead');
populateSlider("finishedSlider", sectionsData.finished, 'Finished', 'finished');

function setupSliderControls(sliderId, prevButtonId, nextButtonId) {
    const slider = document.getElementById(sliderId);
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);

    let scrollPosition = 0;
    const cardWidth = 208; // Width of a single card (adjust based on your card width)
    const visibleCards = 5; // Number of visible cards in the slider
    const scrollAmount = cardWidth * visibleCards;

    function updateButtonVisibility() {
        // Hide prev button if at the start, otherwise show it
        prevButton.style.display = scrollPosition <= 0 ? 'none' : 'block';

        // Hide next button if at the end, otherwise show it
        const maxScrollPosition = slider.scrollWidth - slider.clientWidth;
        nextButton.style.display = scrollPosition >= maxScrollPosition ? 'none' : 'block';
    }

    nextButton.addEventListener("click", () => {
        const maxScrollPosition = slider.scrollWidth - slider.clientWidth;
        scrollPosition += scrollAmount;

        // Prevent scrolling beyond the maximum position
        if (scrollPosition > maxScrollPosition) {
            scrollPosition = maxScrollPosition;
        }

        slider.style.transform = `translateX(-${scrollPosition}px)`;
        updateButtonVisibility();
    });

    prevButton.addEventListener("click", () => {
        scrollPosition -= scrollAmount;

        // Prevent scrolling before the start
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }

        slider.style.transform = `translateX(-${scrollPosition}px)`;
        updateButtonVisibility();
    });

    // Initial button visibility update
    updateButtonVisibility();
}

// Initialize sliders with unique IDs for each button set
setupSliderControls("currentlyReadingSlider", "prevCurrentlyReading", "nextCurrentlyReading");
setupSliderControls("toReadSlider", "prevToRead", "nextToRead");
setupSliderControls("finishedSlider", "prevFinished", "nextFinished");

// Mobile Menu Toggle
document.getElementById("mobile-menu-toggle").addEventListener("click", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
    console.log("Hamburger menu toggled"); // Debugging log
});

// Function to handle screen resize
function handleResize() {
    const notifIcon = document.getElementById("notifIcon");
    const profileIcon = document.getElementById("profileIcon");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

    if (window.innerWidth >= 768) {
        notifIcon.classList.remove("hidden");
        profileIcon.classList.remove("hidden");
        mobileMenuToggle.classList.add("hidden");
        document.getElementById("mobile-menu").classList.add("hidden");
    } else {
        notifIcon.classList.add("hidden");
        profileIcon.classList.add("hidden");
        mobileMenuToggle.classList.remove("hidden");
    }
    console.log("Window resized, handleResize called"); // Debugging log
}

// Initial check when the page loads
handleResize();
window.addEventListener("resize", handleResize);
