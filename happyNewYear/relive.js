document.addEventListener('DOMContentLoaded', () => {
    const yesReliveBtn = document.getElementById('yesReliveBtn');
    const noReliveBtn = document.getElementById('noReliveBtn');

    noReliveBtn.addEventListener('click', () => {
        let currentNoWidth = noReliveBtn.offsetWidth;
        let currentNoHeight = noReliveBtn.offsetHeight;
        let currentYesWidth = yesReliveBtn.offsetWidth;
        let currentYesHeight = yesReliveBtn.offsetHeight;
        let currentNoFontSize = parseFloat(window.getComputedStyle(noReliveBtn, null).getPropertyValue('font-size'));
        let currentYesFontSize = parseFloat(window.getComputedStyle(yesReliveBtn, null).getPropertyValue('font-size'));

        if (currentNoWidth > 10 && currentNoHeight > 5 && currentNoFontSize > 5) {
            noReliveBtn.style.width = `${currentNoWidth - 10}px`;
            noReliveBtn.style.height = `${currentNoHeight - 5}px`;
            noReliveBtn.style.fontSize = `${currentNoFontSize - 1}px`;
            yesReliveBtn.style.width = `${currentYesWidth + 10}px`;
            yesReliveBtn.style.height = `${currentYesHeight + 5}px`;
            yesReliveBtn.style.fontSize = `${currentYesFontSize + 1}px`;
        }
    });

    yesReliveBtn.addEventListener('click', () => {
        window.location.href = 'photos.html';
    });
});
