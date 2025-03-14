document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const videoSection = document.getElementById('video-message');
    const photosSection = document.getElementById('photos-section');
    const timerSection = document.getElementById('timer-section');
    const backToMainBtn = document.getElementById('backToMainBtn');
    const yesNextBtn = document.getElementById('yesNextBtn');
    const noNextBtn = document.getElementById('noNextBtn');
    const yesBtn = document.getElementById('yesBtn');

    yesNextBtn.addEventListener('click', () => {
        videoSection.style.display = 'none';
        photosSection.style.display = 'block';
    });

    const moveButtonFarAway = (btn, event) => {
        const buttonContainer = btn.parentElement;
        const containerRect = buttonContainer.getBoundingClientRect();
        const btnWidth = btn.offsetWidth;
        const btnHeight = btn.offsetHeight;

        // Calculate new position farthest from the cursor
        let newLeft = event.clientX > (containerRect.left + containerRect.width / 2) ? 0 : (containerRect.width - btnWidth - 10); // Leave a small margin
        let newTop = event.clientY > (containerRect.top + containerRect.height / 2) ? 0 : (containerRect.height - btnHeight - 10); // Leave a small margin

        btn.style.position = 'absolute';
        btn.style.left = `${newLeft}px`;
        btn.style.top = `${newTop}px`;
    };

    // Make the "Not yet" button move far away when the cursor gets close
    noBtn.addEventListener('mousemove', (event) => {
        const btnRect = noBtn.getBoundingClientRect();
        const distance = 100; // Distance threshold to move the button

        if (event.clientX >= btnRect.left - distance && event.clientX <= btnRect.right + distance &&
            event.clientY >= btnRect.top - distance && event.clientY <= btnRect.bottom + distance) {
            moveButtonFarAway(noBtn, event);
        }
    });

    backToMainBtn.addEventListener('click', () => {
        timerSection.style.display = 'none';
    });

    yesBtn.addEventListener('click', () => {
        window.location.href = 'reminder.html';
    });
});
