// access.js
document.addEventListener('DOMContentLoaded', () => {
    const correctCode = '1028'; // The correct access code
    const accessBtn = document.getElementById('accessBtn');
    const clearBtn = document.getElementById('clearBtn');
    const accessCodeInput = document.getElementById('access-code');
    const errorMessage = document.getElementById('error-message');
    const hintMessage = "Hint: Our monthsary"; // Change this to your actual hint

    document.querySelectorAll('.calc-btn').forEach(button => {
        button.addEventListener('click', () => {
            accessCodeInput.value += button.textContent;
        });
    });

    clearBtn.addEventListener('click', () => {
        accessCodeInput.value = '';
        errorMessage.style.display = 'none';
    });

    accessBtn.addEventListener('click', () => {
        const enteredCode = accessCodeInput.value;
        if (enteredCode === correctCode) {
            localStorage.setItem('accessGranted', 'true');
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = `Incorrect code. Please try again. ${hintMessage}`;
            errorMessage.style.display = 'block';
        }
    });
});
