// Accessing an element by its data-testid attribute
const header = document.querySelector('[data-testid="header"]');

const aboutMeSection = document.querySelector('[data-testid="about-me-section"]');

// Accessing multiple elements with the same data-testid
const goalsListItems = document.querySelectorAll('[data-testid^="goal-"]');
goalsListItems.forEach(item => (item));


function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; // Get the time part of the UTC string
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    document.getElementById('time-utc').textContent = utcTime;
    document.getElementById('day-of-week').textContent = dayOfWeek;
}

// Update time immediately on load
updateTime();

// Update time every second
setInterval(updateTime, 1000);