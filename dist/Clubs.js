const slidesData = [
    {
        imgSrc: 'images/club1.png',
        title: 'Beyond the pages',
        description: 'A book club for curious minds exploring various genres, from historical novels to modern sci-fi, every month. Dive into exciting discussions and meet fellow book lovers!',
        rating: '★★★★★'
    },
    {
        imgSrc: 'images/club2.png',
        title: 'Adventure Seekers',
        description: 'For those who love thrillers and adventures, this club brings together fans of heart-pounding novels and epic sagas. Join us for an exhilarating reading experience!',
        rating: '★★★★☆'
    },
    {
        imgSrc: 'images/club3.png',
        title: 'History Buffs',
        description: 'A club for history enthusiasts! Each month we dive into different historical periods, bringing the past to life through captivating discussions and shared insights.',
        rating: '★★★★★'
    }
];

const sliderContainer = document.getElementById("slider");

// Génération des slides dynamiquement
function createSlides() {
    sliderContainer.innerHTML = ""; // Réinitialiser le conteneur
    slidesData.forEach(slide => {
        const slideElement = document.createElement("div");
        slideElement.className = "slide w-full flex-shrink-0 flex flex-col items-center text-center px-6";
        
        slideElement.innerHTML = `
        <div class="bg-white rounded-full w-36 h-36 md:w-40 md:h-40 flex items-center justify-center shadow-md overflow-hidden">
        <img src="${slide.imgSrc}" alt="${slide.title}" class="w-full h-full object-cover">
        </div>
               
        <div class="text-center mt-4 space-y-2">
        <h1 class="text-xl font-bold ">${slide.title}</h1>
        <p class="text-white-700 text-sm sm:text-base leading-relaxed">${slide.description}</p>
        </div>
        <div class="text-center mt-4 space-y-2">
        <!-- Rating Section -->
        <p class="text-sm sm:text-base mb-4 flex items-center justify-center space-x-1">
            <strong class="text-gray-800">Rating:</strong>
            <span class="text-yellow-500">${slide.rating}</span>
        </p>
    
        <!-- Join Now Button -->
        <button class="bg-green-700 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-green-800 transition duration-200">
            Join Now
        </button>
        </div>
        `;
        
        sliderContainer.appendChild(slideElement);
    });
}

// Appel de la fonction pour générer les slides
createSlides();

// Gestion des boutons de navigation du slider
const totalSlides = slidesData.length;
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
});

function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Liste des clubs sous forme d'objets
const clubs = [
    {
        title: "Beyond The Pages",
        description: "This club is for fans of fantasy and science fiction. Members dive into imaginary worlds filled with mythical creatures and epic quests.",
        image: "images/club1.png",
        currentlyReading: "images/book1.png",
        rating: "★★★★★"
    },
    {
        title: "Historical Reads",
        description: "Specializing in historical fiction, this club explores a different era each month. Whether it's Ancient Rome, the Renaissance, or the World Wars.",
        image: "images/club2.jpg",
        currentlyReading: "images/book2.png",
        rating: "★★★★☆"
    },
    {
        title: "Mind Explorers",
        description: "A space for exploring the human mind through insightful psychology books. Each month, members dive into works on behavior, emotions, and mental health.",
        image: "images/club3.jpg",
        currentlyReading: "images/book3.png",
        rating: "★★★★★"
    },
    
];

// Sélection du conteneur de la liste des clubs
const clubList = document.getElementById("clubList");

// Function to create club cards
function createClubCard(club) {
    // Create the main card container
    const clubCard = document.createElement("div");
    clubCard.className = "bg-white border border-gray-200 rounded-lg p-4 flex items-center shadow-lg hover:shadow-xl transition-shadow duration-200";

    // HTML structure of the card
    clubCard.innerHTML = `
        <!-- Image Section on the Left -->
        <div class="flex-shrink-0 w-24 h-24 mr-6">
            <img src="${club.image}" alt="${club.title} Image" class="w-full h-full rounded-full shadow-md object-cover">
        </div>

        <!-- Text and Button Section in the Center -->
        <div class="flex-grow">
            <h2 class="font-semibold text-[#1F5132] text-lg sm:text-xl">${club.title}</h2>
            <p class="text-gray-600 text-sm sm:text-base mt-1 leading-tight">
                ${club.description}
            </p>
            <div class="w-full flex justify-center mt-3">
            <button class="bg-green-700 text-white py-2 px-6 rounded-md text-base hover:bg-green-900 transition-colors duration-200">
            Join now!
            </button>
            </div>

        </div>

        <!-- Currently Reading Section on the Right -->
        <div class="flex-shrink-0 flex flex-col items-center ml-6">
            <div class="border-l border-gray-300 h-full mr-4 hidden sm:block"></div>
            <p class="text-gray-600 font-medium text-xs sm:text-sm mb-2">Currently reading:</p>
            <img src="${club.currentlyReading}" alt="${club.title} Book Cover" class="w-14 h-20 sm:w-20 sm:h-28 rounded shadow-md object-cover">
        </div>
    `;

    return clubCard;
}

    
    

clubs.forEach(club => {
    const clubCard = createClubCard(club);
    clubList.appendChild(clubCard);
});




// Mobile Menu Toggle
document.getElementById("mobile-menu-toggle").addEventListener("click", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
    console.log("Hamburger menu toggled"); 
});

// Function to handle screen resize
function handleResize() {
    const notifIcon = document.getElementById("notifIcon");
    const profileIcon = document.getElementById("profileIcon");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");

    if (window.innerWidth >= 768) {
        // Show notification & profile icons and hide hamburger menu on larger screens
        notifIcon.classList.remove("hidden");
        profileIcon.classList.remove("hidden");
        mobileMenuToggle.classList.add("hidden");

        // Ensure mobile menu is hidden on larger screens
        document.getElementById("mobile-menu").classList.add("hidden");
    } else {
        // Hide notification & profile icons and show hamburger menu on smaller screens
        notifIcon.classList.add("hidden");
        profileIcon.classList.add("hidden");
        mobileMenuToggle.classList.remove("hidden");
    }
    console.log("Window resized, handleResize called"); // Debugging log
}

handleResize();

// Event listener for window resize
window.addEventListener("resize", handleResize);
