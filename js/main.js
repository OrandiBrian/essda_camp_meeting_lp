// Main JavaScript file for Eden Springs Church

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    populateSpeakers();
    setupEventListeners();
});

// Initialize page
function initializePage() {
    console.log('Eden Springs Church website loaded');
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Populate speakers data
function populateSpeakers() {
    const speakers = [
        {
            name: "Pastor John Wilson",
            title: "Conference President",
            bio: "Renowned speaker with 25 years of ministry experience",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            sessions: ["Opening Night", "Sabbath Morning"]
        },
        {
            name: "Dr. Sarah Martinez",
            title: "Biblical Scholar",
            bio: "PhD in Theology, author of 'Walking in Faith'",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            sessions: ["Women's Ministry", "Family Life"]
        },
        {
            name: "Elder David Thompson",
            title: "Youth Director",
            bio: "Dynamic youth leader inspiring the next generation",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            sessions: ["Youth Rally", "Sabbath Afternoon"]
        },
        {
            name: "Pastor Grace Ochieng",
            title: "Evangelist",
            bio: "Passionate evangelist with a heart for missions",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            sessions: ["Evening Evangelism", "Prayer Meeting"]
        }
    ];
    
    const speakersGrid = document.getElementById('speakers-grid');
    
    speakers.forEach(speaker => {
        const speakerCard = createSpeakerCard(speaker);
        speakersGrid.appendChild(speakerCard);
    });
}

// Create speaker card element
function createSpeakerCard(speaker) {
    const card = document.createElement('div');
    card.className = 'speaker-card bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1';
    
    card.innerHTML = `
        <div class="relative mb-4">
            <img src="${speaker.image}" alt="${speaker.name}" 
                 class="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-blue-100">
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-1">${speaker.name}</h3>
        <p class="text-blue-600 font-medium mb-3">${speaker.title}</p>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">${speaker.bio}</p>
        <div class="space-y-1">
            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Speaking Sessions:</p>
            ${speaker.sessions.map(session => 
                `<p class="text-sm text-green-600 font-medium">${session}</p>`
            ).join('')}
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Smooth scrolling for navigation links (if you add them)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Amount button clicks
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const amount = this.getAttribute('data-amount');
            document.getElementById('amount').value = amount;
        });
    });
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES'
    }).format(amount);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^254[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}