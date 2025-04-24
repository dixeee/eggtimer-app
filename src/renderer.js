// Homepage
const beginBtn = document.getElementById('beginBtn');

beginBtn.addEventListener('click', () => {
    document.getElementById('homepageCtn').style.display = 'none';
    document.getElementById('menupageCtn').style.display = 'block';
});

// Menu Page
const menuBtnIds = ['sunnysideBtn', 'hardboiledBtn', 'softboiledBtn', 'scrambledBtn']

menuBtnIds.forEach(id => {
    const menuBtn = document.getElementById(id);
    menuBtn.addEventListener('click', () => {
        document.getElementById('menupageCtn').style.display = 'none';
        document.getElementById('startpageCtn').style.display = 'block';

        setTimer(id);
    });
});

// Start Page
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', () => {
    document.getElementById('startpageCtn').style.display = 'none';
    document.getElementById('timerpageCtn').style.display = 'block';
});

// Timer Page
const timer = document.getElementById('timer');
const timerTitle = document.getElementById('timerTitle');

let timeInSeconds = 0;
let intervalId;
let dotCount = 0;

function setTimer(eggId) {
    if (eggId == 'sunnysideBtn') {
        timeInSeconds = 150;
        timer.textContent = '2:30';
        startTimer();
    };

    if (eggId == 'hardboiledBtn') {
        timeInSeconds = 600;
        timer.textContent = '10:00';
        startTimer();
    };

    if (eggId == 'softboiledBtn') {
        timeInSeconds = 360;
        timer.textContent = '6:00';
        startTimer();
    };

    if (eggId == 'scrambledBtn') {
        timeInSeconds = 225;
        timer.textContent = '3:45';
        startTimer();
    };
};

function startTimer() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;

            timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            timeInSeconds--;

            if (timeInSeconds < 0) {
                clearInterval(intervalId);
                intervalId = null;
                timer.textContent = '0:00';
                
                document.getElementById('timerpageCtn').style.display = 'none';
                document.getElementById('endpageCtn').style.display = 'block';
            };
        }, 1000);
    };
};

// End Page
const endBtn = document.getElementById('endBtn');

endBtn.addEventListener('click', () => {
    document.getElementById('endpageCtn').style.display = 'none';
    document.getElementById('homepageCtn').style.display = 'block';
});