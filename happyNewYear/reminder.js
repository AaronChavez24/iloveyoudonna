document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2020-08-10T00:00:00'); // Your start date
    const timerElement = document.getElementById('timer');
    const reminderSection = document.getElementById('reminder-section');
    const timerSection = document.getElementById('timer-section');
    const videoSection = document.getElementById('video-message');
    const showTimerBtn = document.getElementById('showTimerBtn');
    const continueBtn = document.getElementById('continueBtn');
    const backToReminderBtn = document.getElementById('backToReminderBtn');

    function updateTimer() {
        const now = new Date();
        const timeDiff = now - startDate;

        const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        timerElement.textContent = `${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }

    if (timerElement) {
        setInterval(updateTimer, 1000); // Update the timer every second
    }

    showTimerBtn.addEventListener('click', () => {
        reminderSection.style.display = 'none';
        timerSection.style.display = 'flex';
    });

    continueBtn.addEventListener('click', () => {
        timerSection.style.display = 'none';
        videoSection.style.display = 'block';
    });

    backToReminderBtn.addEventListener('click', () => {
        timerSection.style.display = 'none';
        reminderSection.style.display = 'flex';
    });
});
